// Central content for the Macrolan landing page.

export const contact = {
  email: "info@macrolan.company",
  phonePrimary: "+254 722 819 877",
  phoneSecondary: "+254 722 139 333",
  // WhatsApp uses the primary line, digits only (international format).
  whatsapp: "254722819877",
  addressLine1: "Ring Road Court, 08 Ring Road,",
  addressLine2: "Parklands, Nairobi",
  poBox: "P.O. Box 41733 – GPO 00100",
  // Google Maps embed for Parklands, Nairobi.
  mapEmbed:
    "https://www.google.com/maps?q=Ring+Road+Parklands+Nairobi&output=embed",
} as const;

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  img: string;
  title: string;
  desc: string;
  action: string;
}

export interface WhyPoint {
  n: string;
  title: string;
  desc: string;
}

export interface Value {
  k: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  org: string;
  role: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Project {
  img: string;
  title: string;
  location: string;
  desc: string;
}

export const stats: Stat[] = [
  { num: "2014", label: "Incorporated in Kenya" },
  { num: "11+", label: "Years of service" },
  { num: "6", label: "Core service lines" },
  { num: "100%", label: "Tax compliant & prequalified" },
];

export const clientsTop: string[] = [
  "Kenya Revenue Authority",
  "Kenya School of Government",
  "Office of the Deputy President",
  "Sukari Industries",
];

export const services: Service[] = [
  {
    img: "/img/service-it-hardware.svg",
    title: "IT Hardware",
    desc: "Laptops, desktops, servers, UPS, printers and scanners — supplied, delivered and installed.",
    action: "View Products",
  },
  {
    img: "/img/service-cctv.svg",
    title: "CCTV Installation",
    desc: "Design, installation and surveillance systems that keep your premises secure 24/7.",
    action: "Request a Demo",
  },
  {
    img: "/img/service-ict-support.svg",
    title: "ICT Support",
    desc: "24/7 technical support for businesses, so you can focus on your core operations.",
    action: "Contact Support",
  },
  {
    img: "/img/service-security.svg",
    title: "Security Consultancy",
    desc: "Expert consultancy that protects your people, assets and information.",
    action: "Book a Consultation",
  },
  {
    img: "/img/service-software.svg",
    title: "Software Solutions",
    desc: "Licensed software provisioning, deployment and configuration tailored to your operations.",
    action: "Get Licensing",
  },
  {
    img: "/img/service-data-recovery.svg",
    title: "Data Recovery & Restoration",
    desc: "Recovery and restoration of lost or corrupted data from drives, servers and storage devices.",
    action: "Recover Data",
  },
];

export interface HeroImage {
  src: string;
  alt: string;
}

// Real Macrolan project photos that cross-fade in the hero "Recommended" panel.
export const heroImages: HeroImage[] = [
  { src: "/img/hero/hero-1.jpg", alt: "Macrolan technicians installing network equipment on site" },
  { src: "/img/hero/hero-2.jpg", alt: "Structured network cabling and patch panels in a data room" },
  { src: "/img/hero/hero-3.jpg", alt: "Server and network rack with switches and storage" },
  { src: "/img/hero/hero-4.jpg", alt: "CCTV control room with live camera feeds and NVR cabinet" },
  { src: "/img/hero/hero-5.jpg", alt: "Fibre and core switching in a network rack" },
  { src: "/img/hero/hero-6.jpg", alt: "Macrolan staff supplying a new HP laptop to a client" },
];

export const whyPoints: WhyPoint[] = [
  { n: "01", title: "Save money", desc: "Market knowledge and expertise that cut cost without cutting corners." },
  { n: "02", title: "Professionalism", desc: "Courteous, conscientious and respectful in every engagement." },
  { n: "03", title: "Timely delivery", desc: "A track record of quality work delivered on schedule, every time." },
  { n: "04", title: "Tailor-made", desc: "Solutions built around your needs — not off-the-shelf compromises." },
];

export const values: Value[] = [
  { k: "Q", title: "Quality", desc: "Timely, professional, courteous, quality service while continually improving our operations." },
  { k: "I", title: "Integrity", desc: "We conduct ourselves in a fair, ethical and honest manner, always in the client's best interest." },
  { k: "C", title: "Collaboration", desc: "A consultative, innovative environment with peers and customers built on listening and learning." },
  { k: "P", title: "Professionalism", desc: "Courteous, conscientious and respectful in all our dealings with customers." },
  { k: "S", title: "Stewardship", desc: "Dedicated to maintaining and providing a sustainable working environment." },
  { k: "D", title: "Diversity", desc: "An inclusive, welcoming environment where clients, employees and staff can thrive." },
];

export const featuredTestimonial: Testimonial = {
  quote:
    "Macrolan delivered our CCTV system on time and under budget. Their professionalism is unmatched.",
  org: "Kenya School of Government",
  role: "John Mwangi, ICT Manager",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They have exhibited a high degree of professionalism in timely and quality delivery, handling and competitive prices.",
    org: "Kenya School of Government",
    role: "ICT service provider, 3+ years",
  },
  {
    quote:
      "Prequalified for supply and delivery of computers, laptops, servers, UPS, printers and scanners.",
    org: "Office of the Deputy President",
    role: "Supply Chain Management",
  },
];

export const projects: Project[] = [
  {
    img: "/img/projects/proj-cctv.jpg",
    title: "CCTV camera installation",
    location: "Nairobi",
    desc: "External bullet and dome surveillance cameras mounted and aligned for full perimeter coverage.",
  },
  {
    img: "/img/projects/proj-cctv-room.jpg",
    title: "CCTV control room & NVR",
    location: "Nairobi",
    desc: "Dahua network video recorder, monitor wall and lockable cabinet for round-the-clock monitoring.",
  },
  {
    img: "/img/projects/rack-cabling.jpg",
    title: "Structured network cabling",
    location: "Nairobi",
    desc: "Switch stack and patch-panel build-out with fully dressed Cat6 cabling for a corporate data room.",
  },
  {
    img: "/img/projects/proj-network.jpg",
    title: "Network design & planning",
    location: "Nairobi",
    desc: "Topology design and configuration of switching, access points and storage for a new office network.",
  },
  {
    img: "/img/projects/proj-hardware.jpg",
    title: "IT hardware supply & setup",
    location: "Nairobi",
    desc: "Supply, delivery and configuration of laptops and workstations for business and government clients.",
  },
  {
    img: "/img/projects/cabinet-install.jpg",
    title: "Rooftop telecom cabinet",
    location: "Spring Valley, Nairobi County",
    desc: "Outdoor equipment cabinet, power and backup installation for a site connectivity upgrade.",
  },
];

export const faqs: Faq[] = [
  {
    q: "Are you a government-approved supplier?",
    a: "Yes! We're prequalified to supply IT hardware and services to Kenyan government agencies.",
  },
  {
    q: "How long does CCTV installation take?",
    a: "Typically 1–3 days, depending on the size of your premises.",
  },
  {
    q: "Do you offer IT support contracts?",
    a: "Yes! We provide 24/7 support for businesses of all sizes.",
  },
  {
    q: "Can you supply bulk IT hardware?",
    a: "Absolutely. We work with SMEs, enterprises, and government institutions.",
  },
];
