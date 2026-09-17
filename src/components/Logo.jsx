import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="41 Club 4, Biratnagar — home">
      <span className="logo-mark">
        <img src="/images/logos/logo.jpg" alt="41 Club 4, Biratnagar" />
      </span>
      <span className="logo-text">
        <span className="logo-title">41 Club 4</span>
        <span className="logo-sub">Biratnagar</span>
      </span>
    </Link>
  );
}
