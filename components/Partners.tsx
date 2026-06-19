import Reveal from "@/components/Reveal";
import { brands } from "@/lib/brands";
import type { CSSProperties } from "react";

/**
 * Technology-partner / brand strip. Logos render as monochrome glyphs that
 * fade up on scroll and animate to their brand colour on hover.
 */
export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <Reveal variant="up" className="section-head section-head--center">
          <div className="eyebrow">Authorized to supply &amp; support</div>
          <h2 className="section-title">Technology partners &amp; brands</h2>
          <p className="section-lead">
            We source, deploy and maintain hardware and software from the
            world&apos;s leading technology brands — so you get genuine products
            backed by expert local support.
          </p>
        </Reveal>

        <div className="partners__grid">
          {brands.map((b, i) => (
            <Reveal
              key={b.name}
              variant="scale"
              delay={(i % 6) * 70}
              className="partner"
              style={{ "--brand": b.hex } as CSSProperties}
            >
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-label={b.name}
                fill="currentColor"
                dangerouslySetInnerHTML={{
                  __html: `<title>${b.name}</title>${b.inner}`,
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
