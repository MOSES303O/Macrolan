import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  stats,
  clientsTop,
  services,
  whyPoints,
  values,
  testimonials,
} from "@/lib/content";

export default function Home() {
  return (
    <div id="top" className="page">
      {/* ============ TOP BAR ============ */}
      <div className="topbar">
        <div className="topbar__inner container">
          <span className="topbar__note">
            <span className="dot" />
            Prequalified ICT supplier to Kenyan Government &amp; enterprise
          </span>
          <span className="topbar__contact">
            <span>+254 722 819 877</span>
            <span className="topbar__sep">|</span>
            <span>macrolanltd@gmail.com</span>
          </span>
        </div>
      </div>

      {/* ============ NAV ============ */}
      <Nav />

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero__inner container">
          <Reveal variant="up" className="hero__copy">
            <div className="pill">
              <span className="pill__dot" />
              Trusted IT partner in Kenya since 2014
            </div>
            <h1 className="hero__title">
              Professional IT solutions that move your business{" "}
              <span className="hero__title-accent">forward.</span>
            </h1>
            <p className="hero__lead">
              From IT hardware and software to CCTV, printing and security
              consultancy — Macrolan Kenya Enterprises takes the strain off your
              support services so you can focus on what you do best.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                Request a Quote
              </a>
              <a href="#services" className="btn btn--ghost btn--lg">
                Explore Services
              </a>
            </div>
            <div className="hero__badges">
              <span><b>✓</b> KRA Tax Compliant</span>
              <span><b>✓</b> Govt. Prequalified</span>
              <span><b>✓</b> 11+ Years</span>
            </div>
          </Reveal>

          {/* Hero visual */}
          <Reveal variant="left" delay={120} className="hero__visual">
            <div className="hero__glow" />
            <img
              src="/img/hero-connectivity.svg"
              alt="Macrolan IT connectivity hub linking hardware, software, CCTV, printing, security and support across nationwide coverage"
              className="hero__img"
              width="1200"
              height="860"
            />
            <div className="hero__float">
              <div className="hero__float-icon">★</div>
              <div>
                <div className="hero__float-title">Recommended</div>
                <div className="hero__float-sub">by Kenya School of Government</div>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ============ STATS BAND ============ */}
      <section className="stats">
        <div className="stats__inner container">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="up" delay={i * 80} className="stat">
              <div className="stat__num">{s.num}</div>
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="trusted">
        <div className="container">
          <div className="trusted__eyebrow">
            Trusted by leading Kenyan institutions &amp; enterprises
          </div>
          <div className="trusted__logos">
            {clientsTop.map((c, i) => (
              <Reveal key={c} variant="up" delay={i * 70} as="div" className="trusted__logo">
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="services">
        <div className="container">
          <Reveal variant="up" className="section-head">
            <div className="eyebrow">What we do</div>
            <h2 className="section-title">
              Every IT need your organization has — under one roof.
            </h2>
            <p className="section-lead">
              A complete range of products and services to support, secure, and
              equip your business.
            </p>
          </Reveal>

          <div className="services__grid">
            {services.map((sv, i) => (
              <Reveal
                key={sv.title}
                variant="up"
                delay={(i % 3) * 90}
                className="service-card"
              >
                <div className="service-card__media">
                  <img
                    src={sv.img}
                    alt={`${sv.title} illustration`}
                    className="service-card__img"
                    loading="lazy"
                    width="480"
                    height="360"
                  />
                </div>
                <h3 className="service-card__title">{sv.title}</h3>
                <p className="service-card__desc">{sv.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section id="why" className="why">
        <svg className="why__rings" width="520" height="520" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#1C4544" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#1C4544" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="#1C4544" strokeWidth="0.4" />
        </svg>
        <div className="why__inner container">
          <Reveal variant="right" className="why__copy">
            <div className="eyebrow eyebrow--mint">Why choose us</div>
            <h2 className="section-title section-title--light">
              We take the strain so you can grow.
            </h2>
            <p className="why__lead">
              We use our expertise and market knowledge to save you money —
              without ever compromising the professionalism and efficiency of
              your organization.
            </p>
            <a href="#contact" className="btn btn--mint">
              Partner with Macrolan
            </a>
          </Reveal>
          <div className="why__grid">
            {whyPoints.map((w, i) => (
              <Reveal key={w.n} variant="up" delay={i * 90} className="why-card">
                <div className="why-card__n">{w.n}</div>
                <h3 className="why-card__title">{w.title}</h3>
                <p className="why-card__desc">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSION / VISION ============ */}
      <section className="mv">
        <div className="mv__inner container">
          <Reveal variant="right" className="mv-card mv-card--light">
            <div className="mv-card__eyebrow">OUR MISSION</div>
            <p className="mv-card__text">
              To offer professional IT services that are reliable, affordable,
              and meet the needs of our customers.
            </p>
          </Reveal>
          <Reveal variant="left" delay={100} className="mv-card mv-card--dark">
            <div className="mv-card__eyebrow mv-card__eyebrow--mint">OUR VISION</div>
            <p className="mv-card__text">
              To be the preferred and inventive company, partnering with society
              to provide tailor-made IT solutions and an informed community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section id="values" className="values">
        <div className="container">
          <Reveal variant="up" className="section-head section-head--center">
            <div className="eyebrow">What guides us</div>
            <h2 className="section-title">Our core values</h2>
          </Reveal>
          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="up" delay={(i % 3) * 90} className="value-card">
                <div className="value-card__head">
                  <div className="value-card__k">{v.k}</div>
                  <h3 className="value-card__title">{v.title}</h3>
                </div>
                <p className="value-card__desc">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIENTS / CREDENTIALS ============ */}
      <section id="clients" className="clients">
        <div className="clients__inner container">
          <Reveal variant="right" className="clients__copy">
            <div className="eyebrow">Proven &amp; accredited</div>
            <h2 className="section-title">
              Recommended by the institutions we serve.
            </h2>
            <p className="clients__lead">
              For over a decade, public bodies and private enterprises have
              trusted Macrolan to supply, install, and support their critical IT
              infrastructure.
            </p>
            <div className="clients__tags">
              <span className="tag">KRA Tax Compliant</span>
              <span className="tag">VAT Registered</span>
              <span className="tag">Govt. Prequalified</span>
            </div>
          </Reveal>
          <div className="clients__grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.org} variant="up" delay={i * 90} className="testimonial">
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="testimonial__org">{t.org}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </Reveal>
            ))}
            <Reveal variant="up" delay={180} className="testimonial testimonial--dark">
              <div className="testimonial__big">3+ yrs</div>
              <div className="testimonial__big-sub">
                as ICT provider at KSG Kabete — surveillance, supply &amp;
                support.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="contact" className="cta">
        <div className="container">
          <Reveal variant="scale" className="cta__panel">
            <svg className="cta__rings" width="320" height="320" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="#2E7E7B" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#2E7E7B" strokeWidth="0.5" />
            </svg>
            <div className="cta__grid">
              <div>
                <h2 className="cta__title">
                  Ready to put your IT in expert hands?
                </h2>
                <p className="cta__lead">
                  Tell us what your organization needs — hardware, software,
                  CCTV, printing or security consultancy — and we&apos;ll build a
                  solution around it.
                </p>
                <div className="cta__actions">
                  <a href="mailto:info@macrolantechnologies.com" className="btn btn--white">
                    Email Us
                  </a>
                  <a href="tel:+254722819877" className="btn btn--outline-light">
                    Call +254 722 819 877
                  </a>
                </div>
              </div>
              <div className="cta__visit">
                <div className="cta__visit-eyebrow">VISIT US</div>
                <div className="cta__visit-addr">
                  Ring Road Court, 08 Ring Road,
                  <br />
                  Parklands, Nairobi
                </div>
                <div className="cta__visit-po">P.O. Box 41733 – GPO 00100</div>
                <div className="cta__divider" />
                <div className="cta__visit-line">+254 722 819 877</div>
                <div className="cta__visit-line">+254 735 693 079</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <div className="brand brand--footer">
                <span className="brand__mark brand__mark--sm">
                  <span className="brand__ring" />
                </span>
                <span className="brand__name brand__name--light">Macrolan</span>
              </div>
              <p className="footer__about">
                Macrolan Kenya Enterprises Limited — inspiring technology and
                professional IT services since 2014.
              </p>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Services</div>
              <a href="#services">IT Hardware</a>
              <a href="#services">Software Solutions</a>
              <a href="#services">CCTV Installation</a>
              <a href="#services">Security Consultancy</a>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Company</div>
              <a href="#why">Why Us</a>
              <a href="#values">Core Values</a>
              <a href="#clients">Clients</a>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Get in touch</div>
              <span>Ring Road Court, Parklands, Nairobi</span>
              <span>+254 722 819 877</span>
              <span>macrolanltd@gmail.com</span>
              <span>info@macrolantechnologies.com</span>
            </div>
          </div>
          <div className="footer__bottom">
            <span>
              © 2026 Macrolan Kenya Enterprises Limited. All rights reserved.
            </span>
            <span className="footer__tag">INSPIRING TECHNOLOGY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
