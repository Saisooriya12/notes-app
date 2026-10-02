import { CATEGORIES } from "../constants.js";

export default function DashboardPage({ notes }) {
  const totalWords = notes.reduce((sum, n) => sum + n.content.trim().split(/\s+/).length, 0);

  return (
    <section>
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat"><strong>{notes.length}</strong><span>Total notes</span></div>
        <div className="stat"><strong>{totalWords}</strong><span>Total words</span></div>
        {CATEGORIES.map((c) => (
          <div className="stat" key={c}>
            <strong>{notes.filter((n) => n.category === c).length}</strong>
            <span>{c}</span>
          </div>
        ))}
      </div>

      <h3>Recent notes</h3>
      {notes.length === 0 ? (
        <p className="empty">Nothing here yet.</p>
      ) : (
        <ul className="recent">
          {notes.slice(0, 5).map((n) => (
            <li key={n.id}>{n.title} <small>({n.category})</small></li>
          ))}
        </ul>
      )}
    </section>
  );
}
