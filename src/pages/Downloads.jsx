import { Download } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";

const DOWNLOAD_PLACEHOLDERS = [
  "Membership application form",
  "Club constitution & bylaws",
  "Latest newsletter",
  "Event sponsorship pack",
];

export default function Downloads() {
  return (
    <div className="page">
      <SectionLabel>Resources</SectionLabel>
      <h2>Downloads</h2>
      <p className="intro">
        Club forms and documents, once uploaded, will be available here.
      </p>
      <div>
        {DOWNLOAD_PLACEHOLDERS.map((d) => (
          <div className="download-row" key={d}>
            <span>{d}</span>
            <span className="tag">
              <Download size={13} />
              Not yet uploaded
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
