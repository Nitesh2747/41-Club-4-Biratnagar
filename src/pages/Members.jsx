import { Cake, Heart } from "lucide-react";
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

            {(m.birthday || m.anniversary) && (
              <div className="member-dates">
                {m.birthday && (
                  <span className="member-date-chip">
                    <Cake size={13} /> {m.birthday}
                  </span>
                )}
                {m.anniversary && (
                  <span className="member-date-chip">
                    <Heart size={13} /> {m.anniversary}
                  </span>
                )}
              </div>
            )}

            {m.spouse && (
              <div className="member-family-row">
                <span className="member-family-label">Spouse</span>
                <div className="member-family-value">
                  <span className="member-family-entry">
                    {m.spouse.name}
                    {m.spouse.birthday && (
                      <span className="member-date-chip">
                        <Cake size={13} /> {m.spouse.birthday}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            )}

            {m.kids && m.kids.length > 0 && (
              <div className="member-family-row">
                <span className="member-family-label">
                  {m.kids.length > 1 ? "Children" : "Child"}
                </span>
                <div className="member-family-value">
                  {m.kids.map((kid, i) => (
                    <span className="member-family-entry" key={kid.name}>
                      {kid.name}
                      {kid.birthday && (
                        <span className="member-date-chip">
                          <Cake size={13} /> {kid.birthday}
                        </span>
                      )}
                      {i < m.kids.length - 1 && (
                        <span className="member-family-comma">,</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}