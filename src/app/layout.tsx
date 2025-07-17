import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rquet - Bangalore Racquet Sports Tournaments",
  description: "Discover and join exciting racquet sports tournaments across Bangalore. From badminton to squash, find your next competition here.",
  keywords: "racquet sports, tournaments, badminton, squash, tennis, table tennis, Bangalore",
  authors: [{ name: "Rquet Team" }],
  openGraph: {
    title: "Rquet - Bangalore Racquet Sports Tournaments",
    description: "Discover and join exciting racquet sports tournaments across Bangalore",
    url: "https://rquet.com",
    siteName: "Rquet",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Rquet Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rquet - Bangalore Racquet Sports Tournaments",
    description: "Discover and join exciting racquet sports tournaments across Bangalore",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
