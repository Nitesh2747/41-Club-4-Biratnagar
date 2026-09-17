import { Users } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import AboutSubnav from "../components/AboutSubnav.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function Board() {
  return (
    <div className="page">
      <SectionLabel>About</SectionLabel>
      <h2>41Clubs Nepal Board</h2>
      <p className="intro">
        The national board oversees 41 Clubs Nepal. Club 4's own committee
        can be listed here.
      </p>

      <AboutSubnav />

      <EmptyState
        icon={Users}
        title="Board details not yet added"
        body="tbd"
      />
    </div>
  );
}
