import { MapPin, Mail, Phone } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";

export default function Contact() {
  return (
    <div className="page">
      <SectionLabel>Reach us</SectionLabel>
      <h2>Contact</h2>
      <p className="intro">
        For anything specific to Club 4, or for national 41 Clubs Nepal
        matters, use the details below.
      </p>
      <div className="contact-grid">
        <div className="contact-block">
          <h3>Club 4, Biratnagar</h3>
          <div className="contact-row">
            <MapPin size={16} />
            <span>Biratnagar, Koshi Province, Nepal</span>
          </div>
          <div className="contact-row">
            <Phone size={16} />
            <a href="tel:+9779852026032">+977 9852026032</a>
          </div>
          <div className="contact-row">
            <Mail size={16} />
            <a href="mailto:rajesh26032@gmail.com">rajesh26032@gmail.com</a>
          </div>
        </div>
        <div className="contact-block">
          <h3>41 Clubs Nepal</h3>
          <div className="contact-row">
            <MapPin size={16} />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="contact-row">
            <Phone size={16} />
            <a href="tel:+97714267859">+977 1 4267859</a>
          </div>
          <div className="contact-row">
            <Mail size={16} />
            <a href="mailto:hym@41clubs.com.np">hym@41clubs.com.np</a>
          </div>
        </div>
      </div>
    </div>
  );
}
