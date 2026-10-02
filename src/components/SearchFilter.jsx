import { CATEGORIES } from "../constants.js";

export default function SearchFilter({ search, onSearch, category, onCategory }) {
  return (
    <div className="toolbar">
      <input
        type="search"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search notes"
      />
      <select value={category} onChange={(e) => onCategory(e.target.value)} aria-label="Filter by category">
        <option value="All">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
