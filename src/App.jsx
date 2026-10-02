import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import NoteEditorPage from "./pages/NoteEditorPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  const [notes, setNotes] = useLocalStorage("notes", []);

  const addNote = (data) =>
    setNotes((prev) => [
      { id: Date.now(), createdAt: new Date().toISOString(), ...data },
      ...prev,
    ]);

  const updateNote = (id, data) =>
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...data } : n)));

  const deleteNote = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<NotesPage notes={notes} onDelete={deleteNote} />} />
          <Route path="/new" element={<NoteEditorPage notes={notes} onAdd={addNote} />} />
          <Route path="/edit/:id" element={<NoteEditorPage notes={notes} onUpdate={updateNote} />} />
          <Route path="/dashboard" element={<DashboardPage notes={notes} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
