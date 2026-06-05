import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
});
const playfair = localFont({
  src: "../public/fonts/playfair-display-700-latin.woff2",
  variable: "--font-playfair",
  weight: "700",
  display: "swap",
});
const cinzel = localFont({
  src: "../public/fonts/cinzel-latin.woff2",
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NathBliss - Luxury Hotel Booking",
  description: "Experience luxury and comfort with NathBliss hotels",
  metadataBase: new URL("https://www.nathbliss.in"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} ${playfair.variable} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
          <Toaster />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
