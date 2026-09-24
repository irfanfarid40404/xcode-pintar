/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ShoppingBag, MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderTracker?: () => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#136FF5] rounded-lg"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1.5 shadow-md shadow-blue-500/10 transition-transform group-hover:scale-105">
              <img
                src="/icon.png"
                alt="Code Pintar Icon"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                Code Pintar
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">Digital Account Marketplace</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm text-zinc-300 font-medium">
            <a href="#katalog" className="hover:text-white transition-colors">
              Katalog Akun
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

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* WhatsApp CS Fast Consultation */}
          <a
            href="https://wa.me/6281227153679?text=Halo%20Code%20Pintar,%20mau%20tanya%20akun%20digital"
            target="_blank"
            rel="noreferrer"
            aria-label="Konsultasi WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 border border-blue-900/60 rounded-xl px-3 py-2 bg-blue-950/40 hover:bg-blue-950/60 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            <span>Bantuan CS</span>
          </a>

          {/* Shopping Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Buka Keranjang (${cartCount} item)`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-all active:scale-[0.98] shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span>Keranjang</span>
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#136FF5] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
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
          <nav className="flex flex-col space-y-2 text-sm text-zinc-300 font-medium">
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white"
            >
              Katalog Akun
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

          <div className="pt-2 border-t border-zinc-800">
            <a
              href="https://wa.me/6281227153679"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center py-2 bg-blue-950 border border-blue-800/80 rounded-xl text-xs text-blue-300 font-medium"
            >
              WhatsApp CS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
