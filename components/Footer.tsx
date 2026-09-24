/* eslint-disable @next/next/no-img-element */
"use client";

import { MessageCircle, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs py-14 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-zinc-900 gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1 shadow-md shadow-blue-500/10">
              <img
                src="/icon.png"
                alt="Code Pintar Icon"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white block">
                Code Pintar Indonesia
              </span>
              <span className="text-[11px] text-zinc-400">
                Penyedia Akun AI & Produk Digital Premium Terpercaya
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 flex items-center gap-2 text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-[#136FF5] animate-pulse" aria-hidden="true" />
              <span>Server Pengiriman: Otomatis 24 Jam</span>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 flex items-center gap-2 text-zinc-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#136FF5]" aria-hidden="true" />
              <span>Garansi 100% Full Replace</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-zinc-900">
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Kategori Populer
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a href="#katalog" className="hover:text-[#136FF5] transition-colors">
                  Google Gemini Advanced
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#136FF5] transition-colors">
                  ChatGPT Plus & o1
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#136FF5] transition-colors">
                  Claude 3.5 Sonnet Pro
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#136FF5] transition-colors">
                  Cursor Pro AI Editor
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#136FF5] transition-colors">
                  Canva Pro Lifetime / 1 Tahun
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Layanan Pembeli
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a href="#garansi" className="hover:text-[#136FF5] transition-colors">
                  Ketentuan Garansi Akun
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#136FF5] transition-colors">
                  Panduan Cara Login
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#136FF5] transition-colors">
                  Kebijakan Pengembalian Dana
                </a>
              </li>
              <li>
                <a href="#bundling" className="hover:text-[#136FF5] transition-colors">
                  Paket Bundling Hemat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Metode Pembayaran
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>QRIS All Payment</li>
              <li>BCA / Livin Mandiri / BRI</li>
              <li>GoPay / OVO / ShopeePay / Dana</li>
              <li>Konfirmasi Otomatis &lt; 30 Detik</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Kontak Bantuan
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#136FF5] hover:text-blue-400"
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>WhatsApp: +62 812-3456-7890</span>
                </a>
              </li>
              <li>Jam Operasional: 08.00 - 23.00 WIB</li>
              <li>Pengiriman Otomatis: 24 Jam Nonstop</li>
              <li>Email: support@codepintar.id</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-400 gap-4">
          <p className="text-[11px] text-center md:text-left leading-relaxed max-w-2xl">
            © {new Date().getFullYear()} Code Pintar. Semua nama produk, logo, dan merek dagang (Google Gemini, OpenAI, Claude Anthropic, Cursor, Canva, dll) adalah milik masing-masing pemilik hak cipta. Code Pintar adalah penyedia layanan aktivasi akun independen bergaransi.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-zinc-400">
            <span>Dibuat dengan</span>
            <Heart className="h-3 w-3 text-rose-500 fill-current" aria-hidden="true" />
            <span>untuk produktivitas digital Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
