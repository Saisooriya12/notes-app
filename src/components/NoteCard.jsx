import { Link } from "react-router-dom";

export default function NoteCard({ note, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Delete "${note.title}"?`)) onDelete(note.id);
  };

  return (
    <article className="card">
      <span className={`badge ${note.category.toLowerCase()}`}>{note.category}</span>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <footer>
        <small>{new Date(note.createdAt).toLocaleDateString()}</small>
        <div className="actions">
          <Link className="btn small" to={`/edit/${note.id}`}>Edit</Link>
          <button className="btn small danger" onClick={handleDelete}>Delete</button>
        </div>
      </footer>
    </article>
  );
}
