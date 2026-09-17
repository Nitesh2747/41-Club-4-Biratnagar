import SectionLabel from "../components/SectionLabel.jsx";
import Avatar from "../components/Avatar.jsx";
import { officeBearers } from "../data/officeBearers.js";

export default function OfficeBearers() {
  return (
    <div className="page">
      <SectionLabel>Leadership</SectionLabel>
      <h2>Office bearers, 2026-28</h2>
      <p className="intro">
        Meet the dedicated office bearers leading Club 4 this term. Their
        leadership guides the club's activities, strengthens fellowship, and
        supports community-focused initiatives.
      </p>
      <div className="people-grid">
        {officeBearers.map((b) => (
          <div className="person-card" key={b.name}>
            <Avatar name={b.name} tone={b.tone} image={b.image || null } />
            <div>
              <h3>{b.name}</h3>
              <span>{b.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
