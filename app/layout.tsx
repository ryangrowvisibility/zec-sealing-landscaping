import type { Metadata } from "next";
import { Figtree, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Figtree({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "ZEC Sealing & Landscaping | Sod Installation, Landscaping & Driveway Sealing in the GTA & Niagara",
  description:
    "New sod, lawn rebuilds, landscaping, interlock sand and seal, and driveway sealing across the GTA and Niagara. Owner Ivan. 5.0 from 23 Google reviews. Call (437) 971-9027.",
  openGraph: {
    title: "ZEC Sealing & Landscaping | Sod Installation & Sealing",
    description: "Sod installation, landscaping and driveway sealing from Ivan and the ZEC crew. 5.0 from 23 Google reviews. Call (437) 971-9027.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
