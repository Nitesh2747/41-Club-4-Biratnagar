import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";

const ABOUT_LINKS = [
  { to: "/about", label: "41 Club 4 Brt", end: true },
  { to: "/about/chairmans-gallery", label: "Chairman's Gallery" },
  { to: "/about/national-board", label: "National Board Representatives" },
];

const MAIN_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/office-bearers", label: "Office bearers" },
  // { to: "/blog", label: "Blog" },
  { to: "/events", label: "Events" },
  { to: "/downloads", label: "Downloads" },
  { to: "/links", label: "Links" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();
  const aboutActive = location.pathname.startsWith("/about");

  useEffect(() => {
    setAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!aboutOpen) return;

    function handlePointerDown(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setAboutOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [aboutOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <Logo />

        <nav className="nav-desktop" aria-label="Primary">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>

          <div
            className={`nav-dropdown${aboutActive ? " active" : ""}${
              aboutOpen ? " open" : ""
            }`}
            ref={aboutRef}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen((v) => !v)}
            >
              About
            </button>
            <div className="nav-dropdown-menu">
              {ABOUT_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.end}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink className="nav-link" to="/office-bearers">
            Office bearers
          </NavLink>
          {/* <NavLink className="nav-link" to="/blog">
            Blog
          </NavLink> */}
          <NavLink className="nav-link" to="/events">
            Events
          </NavLink>
          <NavLink className="nav-link" to="/downloads">
            Downloads
          </NavLink>
          <NavLink className="nav-link" to="/links">
            Links
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          {MAIN_LINKS.slice(0, 1).map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <div className="mobile-nav-sub">
            {ABOUT_LINKS.slice(1).map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {MAIN_LINKS.slice(1).map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}