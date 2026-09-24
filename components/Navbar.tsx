"use client";

import { useState } from "react";
import { Sparkles, ShoppingBag, Search, MessageCircle, Menu, X, Clock } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderTracker: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onOpenOrderTracker,
  searchQuery,
  onSearchChange,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      {/* Top Banner announcement */}
      <div className="border-b border-zinc-800/60 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-950 py-1.5 px-4 text-center text-xs text-zinc-300">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-medium text-emerald-400">Pengiriman Otomatis 24 Jam:</span>
          <span className="text-zinc-300 hidden sm:inline">
            Akun Gemini Pro, ChatGPT Plus, Claude & Cursor langsung dikirim via WhatsApp & Web.
          </span>
          <span className="text-zinc-300 sm:hidden">Proses otomatis &lt; 60 detik!</span>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950 font-bold shadow-md shadow-emerald-500/20 transition-transform group-hover:scale-105">
              <Sparkles className="h-5 w-5 fill-current" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                PintarStore
                <span className="rounded bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 px-1.5 py-0.2 text-[10px] font-mono font-medium">
                  Verified
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">Digital Account Marketplace</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm text-zinc-300 font-medium">
            <a href="#katalog" className="hover:text-white transition-colors">
              Katalog Akun
            </a>
            <a href="#bundling" className="hover:text-white transition-colors">
              Paket Hemat
            </a>
            <a href="#garansi" className="hover:text-white transition-colors">
              Garansi & Layanan
            </a>
            <a href="#ulasan" className="hover:text-white transition-colors">
              Ulasan Pembeli
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
        </div>

        {/* Center Search Input (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xs items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-zinc-400 pointer-events-none" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari Gemini, ChatGPT, Cursor..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 py-1.5 pl-9 pr-3 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Cek Pesanan Button */}
          <button
            type="button"
            onClick={onOpenOrderTracker}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white border border-zinc-800/90 rounded-xl px-3 py-2 bg-zinc-900/60 hover:bg-zinc-850 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <Clock className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
            <span>Cek Pesanan</span>
          </button>

          {/* WhatsApp CS Fast Consultation */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20PintarStore,%20mau%20tanya%20akun%20digital"
            target="_blank"
            rel="noreferrer"
            aria-label="Konsultasi WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-900/60 rounded-xl px-3 py-2 bg-emerald-950/40 hover:bg-emerald-950/60 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            <span>Bantuan CS</span>
          </a>

          {/* Shopping Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Buka Keranjang (${cartCount} item)`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-all active:scale-[0.98] shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span>Keranjang</span>
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500 pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari Gemini, ChatGPT, Cursor..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2 pl-9 pr-3 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            />
          </div>

          <nav className="flex flex-col space-y-2 text-sm text-zinc-300 font-medium">
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Katalog Akun
            </a>
            <a
              href="#bundling"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Paket Hemat
            </a>
            <a
              href="#garansi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Garansi & Layanan
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Ulasan Pembeli
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-2 border-t border-zinc-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderTracker();
              }}
              className="flex-1 text-center py-2 border border-zinc-800 bg-zinc-900 rounded-xl text-xs text-zinc-300 font-medium"
            >
              Cek Pesanan Saya
            </button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 bg-emerald-950 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 font-medium"
            >
              WhatsApp CS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
