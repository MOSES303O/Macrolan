"use client";

import {
  type ElementType,
  type ReactNode,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

interface RevealProps {
  /** Element tag to render (default "div"). */
  as?: ElementType;
  children: ReactNode;
  /** ms delay before the transition starts (for staggering). */
  delay?: number;
  /** Direction/style of the entrance animation. */
  variant?: RevealVariant;
  /** Only animate the first time it enters (default true). */
  once?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps content and reveals it with a fade/slide-in once it scrolls into view.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  variant = "up",
  once = true,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion — show immediately.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
