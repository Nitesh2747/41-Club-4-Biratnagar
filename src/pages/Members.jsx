import SectionLabel from "../components/SectionLabel.jsx";
import Avatar from "../components/Avatar.jsx";
import { members } from "../data/members.js";

export default function Members() {
  return (
    <div className="page">
      <SectionLabel>Fellowship</SectionLabel>
      <h2>Members</h2>
      <p className="intro">
        The members of Club 4, Biratnagar — together with their families, who
        are as much a part of the fellowship as the members themselves.
      </p>

      <div className="members-grid">
        {members.map((m) => (
          <div className="member-card" key={m.name}>
            <div className="member-card-top">
              <Avatar name={m.name} image={m.image} tone={m.tone} />
              <div>
                <h3>{m.name}</h3>
                <span>{m.role}</span>
              </div>
            </div>

            {(m.spouse || (m.kids && m.kids.length > 0)) && (
              <div className="member-family">
                {m.spouse && (
                  <div className="member-family-row">
                    <span className="member-family-label">Spouse</span>
                    <span>{m.spouse}</span>
                  </div>
                )}
                {m.kids && m.kids.length > 0 && (
                  <div className="member-family-row">
                    <span className="member-family-label">
                      {m.kids.length > 1 ? "Kids" : "Kid"}
                    </span>
                    <span>{m.kids.join(", ")}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}