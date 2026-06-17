// Central content for the Macrolan landing page.

export interface Stat {
  num: string;
  label: string;
}

export interface Service {
  img: string;
  title: string;
  desc: string;
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

export const stats: Stat[] = [
  { num: "2014", label: "Incorporated in Kenya" },
  { num: "11+", label: "Years of service" },
  { num: "6", label: "Core service lines" },
  { num: "100%", label: "Tax compliant & prequalified" },
];

export const clientsTop: string[] = [
  "Kenya School of Government",
  "Office of the Deputy President",
  "Sukari Industries",
  "Kenya Revenue Authority",
];

export const services: Service[] = [
  {
    img: "/img/service-it-hardware.svg",
    title: "IT Hardware",
    desc: "Supply, delivery and installation of laptops, desktops, servers, UPS, printers and scanners.",
  },
  {
    img: "/img/service-software.svg",
    title: "Software Solutions",
    desc: "Licensed software provisioning, deployment and configuration tailored to your operations.",
  },
  {
    img: "/img/service-printing.svg",
    title: "Printing & Document Solutions",
    desc: "End-to-end printing, copying and document management to keep your office running.",
  },
  {
    img: "/img/service-cctv.svg",
    title: "CCTV Installation",
    desc: "Design, installation, testing and surveillance systems to keep your premises secure.",
  },
  {
    img: "/img/service-security.svg",
    title: "Security Consultancy",
    desc: "Expert security consultancy that protects your people, assets and information.",
  },
  {
    img: "/img/service-ict-support.svg",
    title: "ICT Support",
    desc: "Reliable ongoing support so you can concentrate on the performance of your core business.",
  },
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
