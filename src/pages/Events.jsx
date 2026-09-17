import { Calendar } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import EmptyState from "../components/EmptyState.jsx";

export default function Events() {
  return (
    <div className="page">
      <SectionLabel>Calendar</SectionLabel>
      <h2>Events</h2>
      <p className="intro">
        Club gatherings, service projects and joint events with sister clubs
        will be listed here as they're scheduled.
      </p>
      <div className="events-grid">
        <EmptyState
          icon={Calendar}
          title="No events scheduled yet"
          body="Add your next club meeting or project date here."
        />
        <EmptyState
          icon={Calendar}
          title="Nothing planned yet"
          body="Joint events with Round Table or Ladies Circle Nepal can go here."
        />
        <EmptyState
          icon={Calendar}
          title="Open slot"
          body="Community service days and fellowship nights belong on this calendar."
        />
      </div>
    </div>
  );
}
