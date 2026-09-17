import SectionLabel from "../components/SectionLabel.jsx";
import AboutSubnav from "../components/AboutSubnav.jsx";

export default function About() {
  return (
    <div className="page">
      <SectionLabel>About</SectionLabel>
      <h2>41 Club 4, Biratnagar, Nepal</h2>
      <p className="intro">
        Club 4 is one of five chartered clubs under 41 Clubs Nepal.
      </p>

      <AboutSubnav />

      <div className="subhead">
        <h3>Who we are</h3>
        <p>
          41 Club 4 brt carries the spirit of fellowship and service forward
          beyond the active years of Round Table, bringing together former
          Round Tablers aged 40 and above. It gives members a way to continue
          building friendship, leadership and community service long after
          their Tabler years end.
        </p>
        <p>
          The guiding philosophy is "Service Through Fellowship" — members
          come together for meaningful relationships while contributing to
          the betterment of society, carrying forward the Round Table values
          of fellowship, leadership, service and commitment to community.
        </p>
      </div>

      <div className="subhead">
        <h3>What the club does</h3>
        <p>
          Members work alongside Round Table Nepal, Tangent clubs and Ladies
          Circle Nepal on projects spanning education, healthcare, community
          development and disaster relief — identifying genuine local needs
          and turning them into action. The organization reports that
          contributions go directly to service projects with no overhead
          taken out.
        </p>
      </div>

      <div className="subhead">
        <h3>Part of a global movement</h3>
        <p>
          41 Clubs Nepal operates under the global banner of 41 International,
          connecting members to a worldwide network built on the motto "May
          the chains of friendship never rust."
        </p>
      </div>
    </div>
  );
}
