"use client";

import { useState } from "react";
import { ArrowRight, Terminal, Check, Copy } from "lucide-react";

interface CTASectionProps {
  onOpenCheckout?: () => void;
}

export function CTASection({ onOpenCheckout }: CTASectionProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx xcode-pintar init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="relative py-20 md:py-28 overflow-hidden bg-zinc-950 border-b border-zinc-900">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[650px] rounded-full opacity-15 blur-[100px] bg-[#136FF5]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 max-w-2xl mx-auto leading-tight">
          Pangkas waktu kompilasi tim Anda hari ini.
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Setup selesai dalam 5 menit. Tidak ada perombakan repo. Rasakan build 10x lebih cepat sejak eksekusi pertama.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#136FF5] hover:bg-[#0F65E5] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] shadow-md shadow-blue-500/25 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
          >
            <span>Mulai Uji Coba Gratis</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* CLI Copy Command Box */}
          <div className="w-full sm:w-auto flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-xs font-mono text-zinc-300">
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-[#136FF5]" aria-hidden="true" />
              <span>npx xcode-pintar init</span>
            </span>
            <button
              type="button"
              onClick={copyCommand}
              aria-label="Salin perintah instalasi"
              className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[#136FF5]" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <p className="text-xs text-zinc-400">
          Uji coba 14 hari tanpa kartu kredit · Bekerja dengan Xcode 15/16+ & Swift 6
        </p>
      </div>
    </section>
  );
}
