"use client";

import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

const LINKS: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#values", label: "Values" },
  { href: "#clients", label: "Clients" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <a href="#top" className="brand" aria-label="Macrolan home">
          <span className="brand__mark">
            <span className="brand__ring" />
          </span>
          <span className="brand__text">
            <span className="brand__name">Macrolan</span>
            <span className="brand__tag">INSPIRING TECHNOLOGY</span>
          </span>
        </a>

        <div className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav__cta">
          Get a Quote
        </a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav__burger-bar ${open ? "is-open-1" : ""}`} />
          <span className={`nav__burger-bar ${open ? "is-open-2" : ""}`} />
          <span className={`nav__burger-bar ${open ? "is-open-3" : ""}`} />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="nav__cta nav__cta--mobile"
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
