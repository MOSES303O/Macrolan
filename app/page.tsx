import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import HeroCarousel from "@/components/HeroCarousel";
import {
  stats,
  clientsTop,
  services,
  whyPoints,
  values,
  projects,
  featuredTestimonial,
  contact,
} from "@/lib/content";

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hello Macrolan, I'd like to enquire about your IT services."
)}`;
const telPrimary = `tel:${contact.phonePrimary.replace(/\s/g, "")}`;
const telSecondary = `tel:${contact.phoneSecondary.replace(/\s/g, "")}`;

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
            <a href={telPrimary} className="topbar__link">{contact.phonePrimary}</a>
            <span className="topbar__sep">|</span>
            <a href="mailto:info@macrolan.company" className="topbar__link" data-contact>
              {contact.email}
            </a>
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
              <span className="hero__title-accent">Secure. Recover. Optimize.</span>
              <br />
              IT solutions for businesses in Kenya.
            </h1>
            <p className="hero__lead">
              Macrolan Kenya Enterprises provides cyber security, data recovery,
              IT asset management and infrastructure solutions — so you can
              concentrate on your business, not your IT issues.
            </p>
            <div className="hero__actions">
              <a href={telPrimary} className="btn btn--primary btn--lg">
                📞 Call Now
              </a>
              <a href="#contact" className="btn btn--accent btn--lg" data-contact>
                📩 Get a Free Quote
              </a>
            </div>
            <div className="hero__badges">
              <span><b>✓</b> KRA Tax Compliant</span>
              <span><b>✓</b> Govt. Prequalified</span>
              <span><b>✓</b> 11+ Years</span>
            </div>
          </Reveal>

          <Reveal variant="left" delay={120} className="hero__visual">
            <div className="hero__glow" />
            <HeroCarousel />
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

      {/* ============ TRUST SIGNALS ============ */}
      <section id="trust" className="trust">
        <div className="trust__inner container">
          <Reveal variant="right">
            <div className="eyebrow">Proven &amp; accredited</div>
            <h2 className="section-title">Trusted by leading Kenyan institutions</h2>
            <p className="section-lead">
              For over a decade, we&apos;ve delivered quality IT solutions to
              businesses and government agencies across Kenya.
            </p>
            <div className="trust__logos">
              {clientsTop.map((c) => (
                <span key={c} className="trust__logo">{c}</span>
              ))}
            </div>
          </Reveal>
          <Reveal variant="left" delay={120} className="trust__quote">
            <div className="trust__quote-mark">&ldquo;</div>
            <p className="trust__quote-text">{featuredTestimonial.quote}</p>
            <div className="trust__quote-by">
              <div className="trust__quote-name">{featuredTestimonial.role}</div>
              <div className="trust__quote-org">{featuredTestimonial.org}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
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

      {/* ============ SERVICES ============ */}
      <section id="services" className="services">
        <div className="container">
          <Reveal variant="up" className="section-head section-head--center">
            <div className="eyebrow">What we do</div>
            <h2 className="section-title">Our IT services</h2>
            <p className="section-lead">One-stop solutions for your business needs.</p>
          </Reveal>

          <div className="services__grid">
            {services.map((sv, i) => (
              <Reveal key={sv.title} variant="up" delay={(i % 3) * 90} className="service-card">
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
                {sv.bullets && (
                  <ul className="service-card__tags">
                    {sv.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <a href="#contact" className="service-card__action" data-contact>
                  {sv.action} <span aria-hidden>→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS / OUR WORK ============ */}
      <section id="projects" className="projects">
        <div className="container">
          <Reveal variant="up" className="section-head section-head--center">
            <div className="eyebrow">Our work</div>
            <h2 className="section-title">Recent projects across Kenya</h2>
            <p className="section-lead">
              Real installations delivered for businesses and institutions —
              from structured cabling to site connectivity.
            </p>
          </Reveal>

          <div className="projects__grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 100} className="project">
                <div className="project__media">
                  <span className="project__loc">📍 {p.location}</span>
                  <img src={p.img} alt={`${p.title} — ${p.location}`} loading="lazy" />
                </div>
                <div className="project__body">
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section id="why" className="why">
        <svg className="why__rings" width="520" height="520" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#1E3A66" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#1E3A66" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="#1E3A66" strokeWidth="0.4" />
        </svg>
        <div className="why__inner container">
          <Reveal variant="right" className="why__copy">
            <div className="eyebrow eyebrow--light">Why choose us</div>
            <h2 className="section-title section-title--light">
              We take the strain so you can grow.
            </h2>
            <p className="why__lead">
              We use our expertise and market knowledge to save you money —
              without ever compromising the professionalism and efficiency of
              your organization.
            </p>
            <a href="#contact" className="btn btn--white btn--lg" data-contact style={{ marginTop: 28 }}>
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
      <section id="about" className="mv">
        <div className="mv__inner container">
          <Reveal variant="right" className="mv-card mv-card--light">
            <div className="mv-card__eyebrow">OUR MISSION</div>
            <p className="mv-card__text">
              To offer professional IT services that are reliable, affordable,
              and meet the needs of our customers.
            </p>
          </Reveal>
          <Reveal variant="left" delay={100} className="mv-card mv-card--dark">
            <div className="mv-card__eyebrow mv-card__eyebrow--light">OUR VISION</div>
            <p className="mv-card__text">
              To be the preferred and inventive company, partnering with society
              to provide tailor-made IT solutions and an informed community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ VALUES ============ */}
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

      {/* ============ PARTNERS ============ */}
      <Partners />

      {/* ============ FAQ ============ */}
      <Faq />

      {/* ============ CONTACT ============ */}
      <section id="contact" className="contact">
        <div className="container">
          <Reveal variant="up" className="contact__head">
            <div className="eyebrow">Get in touch</div>
            <h2 className="section-title">Ready to upgrade your IT?</h2>
            <p className="section-lead">
              Get in touch for a free consultation or custom quote — our team
              responds fast.
            </p>
          </Reveal>

          <div className="contact__grid">
            <Reveal variant="right" className="contact__methods">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Ring+Road+Court+Parklands+Nairobi`}
                target="_blank"
                rel="noopener noreferrer"
                className="method"
              >
                <div className="method__icon">📍</div>
                <div className="method__label">Visit us</div>
                <div className="method__value">
                  {contact.addressLine1}
                  <span>{contact.addressLine2}</span>
                </div>
              </a>
              <a href="mailto:info@macrolan.company" className="method" data-contact>
                <div className="method__icon">📧</div>
                <div className="method__label">Email us</div>
                <div className="method__value">{contact.email}</div>
              </a>
              <a href={telPrimary} className="method">
                <div className="method__icon">📞</div>
                <div className="method__label">Call us</div>
                <div className="method__value">
                  {contact.phonePrimary}
                  <span>{contact.phoneSecondary}</span>
                </div>
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="method method--wa">
                <div className="method__icon">💬</div>
                <div className="method__label">WhatsApp us</div>
                <div className="method__value">Chat now</div>
              </a>

              <div className="contact__cta">
                <a href="#contact" className="btn btn--primary btn--lg" data-contact>
                  Fill Out Our Form →
                </a>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
                  💬 WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal variant="left" delay={120} className="contact__map">
              <iframe
                title="Macrolan location — Ring Road, Parklands, Nairobi"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <div className="brand brand--footer">
                <span className="brand__logo-tile">
                  <img src="/img/logo-mark.png" alt="Macrolan Kenya" width="1498" height="767" />
                </span>
                <span className="brand__name brand__name--light">Macrolan Kenya</span>
              </div>
              <p className="footer__about">
                Macrolan Kenya Enterprises Limited — inspiring technology and
                professional IT services since 2014.
              </p>
              <div className="footer__social">
                <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="X">X</a>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Quick links</div>
              <a href="#top">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#projects">Case Studies</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Services</div>
              <a href="#services">Hardware &amp; Infrastructure</a>
              <a href="#services">Software &amp; Cloud</a>
              <a href="#services">Cybersecurity &amp; Data Protection</a>
              <a href="#services">Surveillance &amp; Security</a>
              <a href="#services">ICT Support &amp; Maintenance</a>
            </div>
            <div className="footer__col">
              <div className="footer__heading">Get in touch</div>
              <span>Ring Road Court, Parklands, Nairobi</span>
              <a href={telPrimary}>{contact.phonePrimary}</a>
              <a href={telSecondary}>{contact.phoneSecondary}</a>
              <a href="mailto:info@macrolan.company" data-contact>{contact.email}</a>
              <a href={waLink} target="_blank" rel="noopener noreferrer">WhatsApp us →</a>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 Macrolan Kenya Enterprises Limited. All rights reserved.</span>
            <span className="footer__tag">INSPIRING TECHNOLOGY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
