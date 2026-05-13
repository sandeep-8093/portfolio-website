import { useState, useEffect } from "react";
import "./navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#whatido" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a className="navbar-brand" href="#home" onClick={(e) => handleNav(e, "#home")}>
        <span className="brand-name">Sandeep</span>
        <span className="brand-dot">.</span>
      </a>

      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={active === href.replace("#", "") ? "active" : ""}
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://drive.google.com/file/d/1Ei_hHUxu2gc9f-6yxcg2SHWPewq7Yx_Q/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="navbar-resume-btn"
      >
        Resume
      </a>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
