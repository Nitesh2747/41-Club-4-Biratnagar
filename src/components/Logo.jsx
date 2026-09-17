import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="41 Club 4, Biratnagar — home">
      <span className="logo-mark">41</span>
      <span className="logo-text">
        <span className="logo-title">Club 4</span>
        <span className="logo-sub">Biratnagar</span>
      </span>
    </Link>
  );
}
