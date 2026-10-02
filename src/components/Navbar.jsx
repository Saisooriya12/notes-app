import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1>📝 Digital Notes</h1>
      <nav>
        <NavLink to="/" end>Notes</NavLink>
        <NavLink to="/new">Add Note</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </header>
  );
}
