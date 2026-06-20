"use client";

import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

const LINKS: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#partners", label: "Partners" },
  { href: "#faq", label: "FAQ" },
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
        <a href="#top" className="brand" aria-label="Macrolan Kenya home">
          <img
            src="/img/logo-mark.png"
            alt="Macrolan Kenya"
            className="brand__logo"
            width="1498"
            height="767"
          />
          <span className="brand__text">
            <span className="brand__name">Macrolan</span>
            <span className="brand__tag">KENYA · TOGETHER WE CAN</span>
          </span>
        </a>

        <div className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn btn--accent nav__cta" data-contact>
          Get a Free Quote
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
          className="btn btn--accent nav__cta--mobile"
          data-contact
          onClick={() => setOpen(false)}
        >
          Get a Free Quote
        </a>
      </div>
    </nav>
  );
}
