import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Macrolan Kenya Enterprises — Inspiring Technology",
  description:
    "Professional IT solutions in Kenya since 2014: IT hardware, software, CCTV, printing and security consultancy. Prequalified ICT supplier to government and enterprise.",
  keywords: [
    "Macrolan",
    "IT Kenya",
    "CCTV installation Nairobi",
    "ICT supplier Kenya",
    "IT hardware",
    "security consultancy",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C5C5B",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
