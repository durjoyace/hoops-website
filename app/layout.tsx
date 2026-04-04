import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global GTM OS — Sell to America from Anywhere",
  description:
    "The all-in-one go-to-market operating system helping manufacturers and exporters sell into the U.S. market. Lead sourcing, AI outreach, country intelligence, and GTM workflows — built for global B2B teams.",
  keywords: [
    "GTM",
    "go-to-market",
    "export",
    "B2B",
    "sell to America",
    "lead generation",
    "AI outreach",
    "country intelligence",
    "global sales",
    "manufacturing export",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Global GTM OS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "The all-in-one go-to-market operating system helping manufacturers and exporters sell into the U.S. market.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-surface-950 text-surface-50 font-sans antialiased"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
