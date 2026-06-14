import type { Metadata } from "next";
import { Cormorant_Garamond, Marcellus, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const label = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-label",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirzava.vercel.app"),
  title: {
    default: "Mirzava — The Sovereign Biryani",
    template: "%s · Mirzava",
  },
  description:
    "Mirzava is a sovereign biryani born of royal kitchens — aged saffron, hand-pounded spice, sealed under dum and revealed only at your table. Reigning since the age of emperors.",
  keywords: [
    "Mirzava",
    "luxury biryani",
    "royal biryani",
    "Hyderabadi biryani",
    "saffron",
    "Mughal cuisine",
    "fine dining",
    "shahi",
  ],
  authors: [{ name: "Mirzava" }],
  openGraph: {
    title: "Mirzava — The Sovereign Biryani",
    description:
      "A sovereign biryani born of royal kitchens. Aged saffron, hand-pounded spice, sealed under dum. Reigning since the age of emperors.",
    type: "website",
    siteName: "Mirzava",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirzava — The Sovereign Biryani",
    description: "A sovereign biryani born of royal kitchens.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${label.variable} ${body.variable}`}>
      <body className="grain vignette antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
