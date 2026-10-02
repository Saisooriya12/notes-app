import { useState } from "react";
import { CATEGORIES } from "../constants.js";

const validate = ({ title, content }) => {
  const errors = {};
  if (!title.trim()) errors.title = "Title is required.";
  else if (title.trim().length < 3) errors.title = "Title must be at least 3 characters.";
  else if (title.length > 60) errors.title = "Title cannot exceed 60 characters.";
  if (!content.trim()) errors.content = "Content is required.";
  else if (content.trim().length < 10) errors.content = "Content must be at least 10 characters.";
  return errors;
};

export default function NoteForm({ initialValues, onSubmit, submitLabel }) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      onSubmit({ title: form.title.trim(), content: form.content.trim(), category: form.category });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} placeholder="Note title" />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label>
        Content
        <textarea name="content" rows="6" value={form.content} onChange={handleChange} placeholder="Write your note..." />
        {errors.content && <span className="error">{errors.content}</span>}
      </label>

      <button type="submit" className="btn">{submitLabel}</button>
    </form>
  );
}
