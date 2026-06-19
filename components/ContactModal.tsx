"use client";

import { useEffect, useState, useCallback } from "react";
import { contact, services } from "@/lib/content";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/**
 * A single contact modal mounted once at the root. It opens whenever the user
 * clicks any element carrying a `data-contact` attribute (the "Get a Quote",
 * "Request a Quote", "Email Us" buttons, the header/footer email, etc.).
 *
 * On submit it composes a pre-filled email to the company (mailto) so the
 * visitor sends their inquiry from their own mail app and gets replies there.
 */
export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setSent(false);
  }, []);

  // Open on any [data-contact] click; close on Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest("[data-contact]");
      if (trigger) {
        e.preventDefault();
        setSent(false);
        setOpen(true);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  // Lock body scroll while open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const buildMailto = () => {
    const subject = form.service
      ? `Inquiry: ${form.service} — ${form.name || "Website enquiry"}`
      : `Website inquiry — ${form.name || "New enquiry"}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.service ? `Service of interest: ${form.service}` : null,
      "",
      "Message:",
      form.message,
      "",
      "— Sent from macrolan.company",
    ].filter(Boolean);
    return `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hand off to the visitor's mail client, pre-addressed to the company.
    window.location.href = buildMailto();
    setSent(true);
  };

  if (!open) return null;

  return (
    <div
      className="cm__overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Contact Macrolan"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="cm__panel">
        <button className="cm__close" aria-label="Close" onClick={close}>
          ×
        </button>

        {!sent ? (
          <>
            <div className="cm__head">
              <div className="eyebrow">Get in touch</div>
              <h2 className="cm__title">Tell us what you need</h2>
              <p className="cm__sub">
                Share a few details and we&apos;ll get back to you. Submitting
                opens your email app with the message ready to send to{" "}
                <b>{contact.email}</b>.
              </p>
            </div>

            <form className="cm__form" onSubmit={onSubmit}>
              <div className="cm__row">
                <label className="cm__field">
                  <span>Name *</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                  />
                </label>
                <label className="cm__field">
                  <span>Email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="cm__row">
                <label className="cm__field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+254 …"
                  />
                </label>
                <label className="cm__field">
                  <span>Service</span>
                  <select value={form.service} onChange={update("service")}>
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              <label className="cm__field">
                <span>Message *</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your requirements…"
                />
              </label>

              <div className="cm__actions">
                <button type="submit" className="btn btn--primary btn--lg">
                  Send Inquiry
                </button>
                <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`} className="btn btn--ghost btn--lg">
                  Call instead
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="cm__done">
            <div className="cm__done-icon">✓</div>
            <h2 className="cm__title">Your email is ready to send</h2>
            <p className="cm__sub">
              We&apos;ve opened your mail app with your inquiry addressed to{" "}
              <b>{contact.email}</b>. Just press send and we&apos;ll reply to
              you directly.
            </p>
            <p className="cm__sub cm__sub--muted">
              Nothing happened? Email us at{" "}
              <a href={buildMailto()}>{contact.email}</a> or call{" "}
              <a href={`tel:${contact.phonePrimary.replace(/\s/g, "")}`}>
                {contact.phonePrimary}
              </a>
              .
            </p>
            <button className="btn btn--primary btn--lg" onClick={close}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
