import { Users } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import AboutSubnav from "../components/AboutSubnav.jsx";
import Avatar from "../components/Avatar.jsx";
import { boards } from "../data/boards.js";

export default function NationalBoard() {
  return (
    <div className="page">
      <SectionLabel>About</SectionLabel>
      <h2>National Board Representatives</h2>
      <p className="intro">
        Club 4's representation on the National Board for year 2026-27 is as follows.
      </p>

      <AboutSubnav />

      <div className="people-grid">
        {boards.map((p) => (
          <div className="person-card" key={p.name}>
            <Avatar name={p.name} image={p.image} tone={p.tone} />
            <div>
              <h3>{p.name}</h3>
              <span>{p.term}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
