import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grandpashabet Güncel Giriş Adresi 2024",
  description: "Grandpashabet, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar. Grandpashabet, spor bahisleri ve casino oyunlarında eşsiz bir deneyim sunar.",
  keywords: "grandpashabet, canlı bahis, spor bahisleri, casino, yüksek oranlar, bonus, futbol bahisleri, basketbol bahisleri, tenis bahisleri",
  authors: [{ name: "Grandpashabet", url: "https://grandpashabet.vercel.app" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Grandpashabet Güncel Giriş Adresi 2024",
    description: "Grandpashabet, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    url: "https://grandpashabet.vercel.app",
    type: "website",
    images: [
      {
        url: "https://grandpashabet.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Grandpashabet logo",
      },
    ],
    siteName: "Grandpashabet",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Grandpashabetguncels",
    creator: "@Grandpashabetguncels",
    title: "Grandpashabet Güncel Giriş Adresi 2024",
    description: "Grandpashabet, yüksek oranlar ve cazip bonuslarla bahis tutkunlarının gözdesi olmuştur. Futbol, basketbol, tenis gibi popüler spor dallarında geniş bahis seçenekleri sunan site, aynı zamanda canlı bahis imkanı da sunar.",
    images: [
      {
        url: "https://grandpashabet.vercel.app/logo.png",
        alt: "Grandpashabet logo",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
