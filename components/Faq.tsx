"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <Reveal variant="up" className="section-head section-head--center">
          <div className="eyebrow">Got questions?</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-lead">
            Everything you need to know about working with Macrolan. Can&apos;t
            find an answer? <a href="#contact" data-contact>Talk to our team.</a>
          </p>
        </Reveal>

        <div className="faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} variant="up" delay={i * 60} className="faq__item">
                <button
                  className={`faq__q ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq__chevron" aria-hidden>
                    +
                  </span>
                </button>
                <div className={`faq__a ${isOpen ? "is-open" : ""}`}>
                  <p>{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
