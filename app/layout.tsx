import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Code Pintar — Toko Akun AI & Tools Premium Bergaransi",
  description:
    "Akses resmi dan bergaransi untuk Google Gemini Advanced, ChatGPT Plus, Claude Pro, Cursor Pro, Midjourney, dan Canva Pro. Pengiriman otomatis via QRIS & Bank.",
  keywords: [
    "jual akun gemini pro",
    "beli gemini advanced murah",
    "akun chatgpt plus indonesia",
    "jual claude pro murah",
    "cursor ai pro murah",
    "canva pro lifetime",
    "produk digital bergaransi",
    "qris akun premium",
  ],
  authors: [{ name: "Code Pintar Indonesia" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-950 selection:text-blue-300">
        {children}
      </body>
    </html>
  );
}
