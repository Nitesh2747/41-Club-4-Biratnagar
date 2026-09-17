import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Users, Calendar, FileText } from "lucide-react";
import FellowshipMark from "../components/FellowshipMark.jsx";
import Avatar from "../components/Avatar.jsx";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="hero-eyebrow">41 Club 4 · Biratnagar</p>
          <h2>Together in fellowship, united in service, connected by friendship.</h2>
          <p className="lede">
            We, 41 Club 4 Biratnagar, are proud to be part of 41 Clubs Nepal. We are a fellowship of individuals united by a shared commitment to service, leadership, and nation building. Through meaningful community initiatives, fellowship, and lasting friendships, we strive to create a positive and lasting impact in our community and beyond.
          </p>
          <div className="hero-ctas">
            <Link className="btn" to="/office-bearers">
              Meet the office bearers <ArrowRight size={16} />
            </Link>
            <Link className="btn secondary" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
        <FellowshipMark />
      </section>

      <div className="facts">
        <div className="fact">
          <strong>41 Clubs Nepal</strong>
          Chartered as part of the worldwide 41 Club fellowship movement.
        </div>
        <div className="fact">
          <strong>Biratnagar, Koshi Province</strong>
          Rooted in the city, active across eastern Nepal.
        </div>
        <div className="fact">
          <strong>Term 2026-28</strong>
          Current office bearers serving the club this year.
        </div>
      </div>

      <div className="quote-block">
        <Avatar name="Rajesh Lohiya" tone="marigold" />
        <div>
          <p>
            Respected Past Chairman, International VP Nico, Fellow 41ers, Spouses, Tangents & Children.
            <br/>
            It is a great honor & privilege to stand before you today as the new Chairman of 41 Club 4 Brt.
            <br />
            First, I would like to thank you all for the trust and confidence you have placed in me I also take this opportunity to express my sincere gratitude to our outgoing Chairman ABHISHEK for his outstanding dedication & service to our club.
            <br />
            41 Club means family to me a family built on friendship, fun and service.
            We all will have fellowship more get togethers and laughter this time. 
            As we move forward this year, my vision is simple :
            To strengthen the bond within our members. To serve our community with purpose and to make our club more active, engaging & impactful. 
            I can't do this alone. I need each one of you.
            Let us make this year memorable together.
            <br />
            Yours in continued friendship.
          </p>
          <p>
            <span className="quote-name">Rajesh Lohiya</span>
            <br />
            <span className="quote-role">Chairman, 41 Club 4 Biratnagar (2026–28)</span>
          </p>
        </div>
      </div>

      <div className="preview-grid">
        <Link className="preview-card" to="/about">
          <Users size={20} color="var(--brick)" />
          <h3>About the club</h3>
          <p>Who we are, and how we fit into the wider 41 Clubs Nepal family.</p>
          <span className="arrow">
            Read more <ArrowUpRight size={14} />
          </span>
        </Link>
        <Link className="preview-card" to="/events">
          <Calendar size={20} color="var(--brick)" />
          <h3>Events</h3>
          <p>What the club is planning, and where to find us next.</p>
          <span className="arrow">
            See events <ArrowUpRight size={14} />
          </span>
        </Link>
        <Link className="preview-card" to="/blog">
          <FileText size={20} color="var(--brick)" />
          <h3>Blog</h3>
          <p>Stories and updates from across the 41 Clubs Nepal family.</p>
          <span className="arrow">
            Read the blog <ArrowUpRight size={14} />
          </span>
        </Link>
      </div>
    </div>
  );
}
