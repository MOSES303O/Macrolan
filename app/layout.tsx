import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Macrolan Kenya — Tailor-Made IT Solutions in Kenya",
  description:
    "Empowering Kenyan businesses with tailor-made IT solutions since 2014. Prequalified ICT supplier to the Kenyan Government: IT hardware, software, CCTV, data recovery and security consultancy.",
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
  themeColor: "#0B5FB5",
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
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
