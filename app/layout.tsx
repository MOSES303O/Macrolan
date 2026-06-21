import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Macrolan Kenya — Secure. Recover. Optimize.",
  description:
    "Macrolan Kenya Enterprises provides cyber security, data recovery, IT asset management and infrastructure solutions — so you can concentrate on your business, not your IT. Prequalified ICT supplier to the Kenyan Government.",
  keywords: [
    "Macrolan",
    "IT Kenya",
    "cybersecurity Kenya",
    "data recovery Nairobi",
    "CCTV installation Nairobi",
    "ICT supplier Kenya",
    "IT asset management",
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
