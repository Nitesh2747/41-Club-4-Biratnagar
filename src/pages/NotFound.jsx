import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>That page doesn't exist on the Club 4 site.</p>
      <Link className="btn" to="/">
        Back to home
      </Link>
    </div>
  );
}
