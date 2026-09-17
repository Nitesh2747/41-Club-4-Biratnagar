import { Link2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import { sisterLinks, clubs } from "../data/sisterLinks.js";

export default function Links() {
  return (
    <div className="page">
      <SectionLabel>The family</SectionLabel>
      <h2>Links</h2>
      <p className="intro">
        Club 4 is part of a wider fellowship family in Nepal and beyond.
      </p>

      <div className="subhead">
        <h3>Associations</h3>
        <div className="links-grid">
          {sisterLinks.map((l) => (
            <a className="link-card" href={l.url} target="_blank" rel="noreferrer" key={l.name}>
              <div className="row">
                <h3>{l.name}</h3>
                <Link2 size={16} color="var(--brick)" />
              </div>
              <p>{l.note}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="subhead">
        <h3>Other 41 Clubs in Nepal</h3>
        <div className="links-grid">
          {clubs.map((c) => (
            <a
              className="link-card"
              href={c.url}
              target={c.isThisClub ? undefined : "_blank"}
              rel={c.isThisClub ? undefined : "noreferrer"}
              key={c.url}
            >
              <div className="row">
                <h3>{c.name}</h3>
                {!c.isThisClub && <Link2 size={16} color="var(--brick)" />}
              </div>
              {c.isThisClub && <p>This is us.</p>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
