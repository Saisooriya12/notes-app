import { useParams, useNavigate, Navigate } from "react-router-dom";
import NoteForm from "../components/NoteForm.jsx";
import { CATEGORIES } from "../constants.js";

// Used for both /new (add) and /edit/:id (edit)
export default function NoteEditorPage({ notes, onAdd, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const existing = isEdit ? notes.find((n) => n.id === Number(id)) : null;

  if (isEdit && !existing) return <Navigate to="/" replace />;

  const handleSubmit = (data) => {
    if (isEdit) onUpdate(existing.id, data);
    else onAdd(data);
    navigate("/");
  };

  return (
    <section>
      <h2>{isEdit ? "Edit Note" : "Add New Note"}</h2>
      <NoteForm
        key={id ?? "new"}
        initialValues={existing ?? { title: "", content: "", category: CATEGORIES[0] }}
        onSubmit={handleSubmit}
        submitLabel={isEdit ? "Update Note" : "Save Note"}
      />
    </section>
  );
}
