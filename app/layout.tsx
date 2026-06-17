import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { CONTRACTOR } from "@/lib/contractor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clearwater Plumbing | Fast. Dependable. Professional.",
  description:
    "Professional plumbing services in the Lower Mainland BC. Emergency repairs, installations, and maintenance.",
  metadataBase: new URL("https://clearwater-plumbing-one.vercel.app"),
  openGraph: {
    title: "Clearwater Plumbing | Fast. Dependable. Professional.",
    description:
      "Professional plumbing services in the Lower Mainland BC. Emergency repairs, installations, and maintenance.",
    siteName: CONTRACTOR.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Clearwater Plumbing | Fast. Dependable. Professional.",
    description:
      "Professional plumbing services in the Lower Mainland BC. Emergency repairs, installations, and maintenance.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: CONTRACTOR.name,
  telephone: CONTRACTOR.phone,
  email: CONTRACTOR.email,
  url: "https://clearwater-plumbing-one.vercel.app",
  areaServed: CONTRACTOR.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="mobile-sticky-spacer" />
        <MobileStickyBar />
      </body>
    </html>
  );
}
