"use client";

import { useEffect, useState } from "react";
import { heroImages } from "@/lib/content";

const INTERVAL = 3500;

/**
 * Cross-fading shuffle of real Macrolan project photos for the hero panel.
 * Pauses for users who prefer reduced motion (shows the first image only).
 */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero__carousel" aria-roledescription="carousel">
      {heroImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`hero__slide ${i === index ? "is-active" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
        />
      ))}
      <div className="hero__dots">
        {heroImages.map((img, i) => (
          <button
            key={img.src}
            className={`hero__dot ${i === index ? "is-active" : ""}`}
            aria-label={`Show project photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
