import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fffaf7",
};

export const metadata: Metadata = {
  title: "Gopi & Jayashree | Wedding Invitation",
  description:
    "You are cordially invited to the wedding celebration of N. Gopi  & Y. Jayashree on 3rd December 2026 at Virbhai Bhavan, Bengaluru.",
  openGraph: {
    title: "Gopi & Jayashree | Wedding Invitation",
    description:
      "Join us for the wedding celebration of Dinesh C & Monisha S J on 24th June 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://www.google.com/maps/search/?api=1&query=Virbai+Bhavan%2C+2nd+Main+Road%2C+Rajaji+Nagar+Industrial+Town%2C+Rajajinagar%2C+Bengaluru+560010"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
