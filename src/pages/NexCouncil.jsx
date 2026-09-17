import { Users } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import AboutSubnav from "../components/AboutSubnav.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function NexCouncil() {
  return (
    <div className="page">
      <SectionLabel>About</SectionLabel>
      <h2>National Board</h2>
      <p className="intro">
        Club 4's representation on the National Board can be added here once
        confirmed.
      </p>

      <AboutSubnav />

      <EmptyState
        icon={Users}
        title="Council details, not yet added"
        body="This section will list Club 4's National Board representatives and their roles."
      />
    </div>
  );
}
