import SectionLabel from "../components/SectionLabel.jsx";
import AboutSubnav from "../components/AboutSubnav.jsx";
import Avatar from "../components/Avatar.jsx";
import { chairmans } from "../data/chairmans.js";

export default function ChairmansGallery() {
  return (
    <div className="page">
      <SectionLabel>About</SectionLabel>
      <h2>Chairman's Gallery</h2>
      <p className="intro">
        A dedicated gallery for 41 Club 4's past and current chairmen.
      </p>

      <AboutSubnav />

      <div className="people-grid">
        {chairmans.map((p) => (
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
