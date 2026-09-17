import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/about", label: "41 Club 4 Biratnagar", end: true },
  { to: "/about/chairmans-gallery", label: "Chairman's Gallery" },
  { to: "/about/national-board", label: "National Board Representatives" },
];

export default function AboutSubnav() {
  return (
    <nav className="about-subnav" aria-label="About section">
      {LINKS.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
