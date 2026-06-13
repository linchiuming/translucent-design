import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://linchiuming.github.io/translucent-design/"),
  title: "Translucent Design Studio | Strategic Brand Identity Design",
  description:
    "A Tainan-based brand design studio crafting clear, strategic, and lasting visual identities for growing businesses and B2B brands.",
  openGraph: {
    title: "Translucent Design Studio",
    description:
      "Clear, strategic, and lasting visual identity systems for brands that need coherence across every touchpoint.",
    url: "https://linchiuming.github.io/translucent-design/",
    siteName: "Translucent Design Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
