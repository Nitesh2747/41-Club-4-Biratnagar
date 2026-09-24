import { Clock, MapPin } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import EventImageCarousel from "../components/EventImageCarousel.jsx";
import { events } from "../data/events.js";

export default function Events() {
  return (
    <div className="page">
      <SectionLabel>Calendar</SectionLabel>
      <h2>Events</h2>
      <p className="intro">
        Club gatherings, service projects and joint events with family clubs.
      </p>

      <div className="events-grid">
        {events.map((e) => (
          <div className="blog-card" key={e.title}>
            {e.images && e.images.length > 0 && (
              <EventImageCarousel images={e.images} alt={e.title} />
            )}
            <div className="blog-card-body">
              <span className="blog-card-date">{e.date}</span>
              <h3>{e.title}</h3>
              <p>{e.description}</p>

              {e.outcome && (
                <div className="event-outcome">
                  <span className="event-outcome-label">Outcome</span>
                  <p>{e.outcome}</p>
                </div>
              )}

              <div className="contact-row">
                <Clock size={16} />
                <span>{e.time}</span>
              </div>
              <div className="contact-row">
                <MapPin size={16} />
                <span>{e.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}