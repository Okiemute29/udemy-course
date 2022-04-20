import { Link } from "react-router-dom";

// styling
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">
          <p>Create recipe</p>
        </Link>
      </nav>
    </div>
  );
}
