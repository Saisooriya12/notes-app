import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard.jsx";
import SearchFilter from "../components/SearchFilter.jsx";

export default function NotesPage({ notes, onDelete }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const visibleNotes = useMemo(() => {
    const q = search.trim().toLowerCase();
    return notes.filter(
      (n) =>
        (category === "All" || n.category === category) &&
        (n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q))
    );
  }, [notes, search, category]);

  return (
    <section>
      <SearchFilter search={search} onSearch={setSearch} category={category} onCategory={setCategory} />

      {notes.length === 0 ? (
        <p className="empty">No notes yet. <Link to="/new">Create your first note</Link>.</p>
      ) : visibleNotes.length === 0 ? (
        <p className="empty">No notes match your search.</p>
      ) : (
        <div className="grid">
          {visibleNotes.map((n) => (
            <NoteCard key={n.id} note={n} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}
