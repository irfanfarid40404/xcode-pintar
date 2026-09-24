"use client";

import { Search, Zap, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function Hero({ searchQuery, onSearchChange }: HeroProps) {
  const popularKeywords = [
    { label: "Gemini Advanced", query: "Gemini" },
    { label: "ChatGPT Plus", query: "ChatGPT" },
    { label: "Claude Pro", query: "Claude" },
    { label: "Cursor AI", query: "Cursor" },
    { label: "Canva Pro", query: "Canva" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
          Akun AI & Tools Premium. <br className="hidden sm:inline" />
          Resmi, murah, langsung aktif.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Akses Google Gemini Advanced, ChatGPT Plus, Claude Pro, Cursor, dan Canva Pro tanpa ribet kartu kredit luar negeri. Akun terkirim otomatis dalam 60 detik.
        </p>

        {/* Search Bar Input */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative flex items-center shadow-xl rounded-2xl border border-zinc-700/80 bg-zinc-900/90 backdrop-blur-md p-1.5 focus-within:border-emerald-500 transition-colors">
            <Search className="ml-3 h-5 w-5 text-zinc-400 shrink-0" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari akun: Gemini, ChatGPT, Claude, Cursor..."
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="text-xs text-zinc-400 hover:text-white px-2 py-1 cursor-pointer"
              >
                Reset
              </button>
            )}
            <a
              href="#katalog"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 px-4 py-2 text-xs font-bold text-emerald-950 transition-colors cursor-pointer"
            >
              <span>Jelajah</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-zinc-400">
            <span className="text-zinc-500 font-medium">Paling Dicari:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw.label}
                type="button"
                onClick={() => onSearchChange(kw.query)}
                className="rounded-lg border border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                {kw.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-8 border-t border-zinc-800/80 text-left">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-3.5 flex items-start gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 shrink-0">
              <Zap className="h-4 w-4 fill-current" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Instan &lt; 60 Detik</div>
              <div className="text-[11px] text-zinc-400">Akun terkirim otomatis ke WhatsApp & Web</div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-3.5 flex items-start gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 shrink-0">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Garansi Full Replace</div>
              <div className="text-[11px] text-zinc-400">Ganti baru jika terjadi kendala langganan</div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-3.5 flex items-start gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 shrink-0">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Bayar QRIS & Bank</div>
              <div className="text-[11px] text-zinc-400">BCA, Mandiri, GoPay, OVO, ShopeePay</div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-3.5 flex items-start gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-900/50 shrink-0">
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Bantuan CS 24 Jam</div>
              <div className="text-[11px] text-zinc-400">Dipandu sampai akun aktif dan berfungsi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
