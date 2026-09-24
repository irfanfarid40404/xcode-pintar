"use client";

import { useState } from "react";
import { X, Search, CheckCircle2, Copy, ShieldCheck, MessageCircle } from "lucide-react";

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderTrackerModal({ isOpen, onClose }: OrderTrackerModalProps) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setResult(true);
  };

  const copyCreds = () => {
    navigator.clipboard.writeText("Email: gemini.pro.id88@pintarstore.my.id\nPass: PintarSecure2026!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 bg-zinc-950/60">
          <h3 className="text-sm font-bold text-white">Lacak Status Pesanan Akun</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pelacak pesanan"
            className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-3">
            <label htmlFor="track-input" className="block text-xs font-semibold text-zinc-300">
              Masukkan Nomor Pesanan atau WhatsApp:
            </label>
            <div className="flex gap-2">
              <input
                id="track-input"
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: ORD-89421 atau 0812..."
                className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#136FF5]"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#136FF5] hover:bg-[#0F65E5] px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <Search className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Cari</span>
              </button>
            </div>
          </form>

          {result && (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 space-y-3 font-mono text-xs animate-in fade-in">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">ID: ORD-89421</span>
                <span className="text-[#136FF5] font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  LUNAS & AKTIF
                </span>
              </div>

              <div>
                <div className="text-[10px] text-zinc-500">Layanan:</div>
                <div className="text-white font-bold">Google Gemini Advanced (1 Bulan Private)</div>
              </div>

              <div>
                <div className="text-[10px] text-zinc-500">Kredensial Akun:</div>
                <div className="text-zinc-200">Email: gemini.pro.id88@codepintar.id</div>
                <div className="text-[#136FF5]">Pass: PintarSecure2026!</div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800 text-zinc-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#136FF5]" aria-hidden="true" />
                  Garansi Sisa 29 Hari
                </span>
                <button
                  type="button"
                  onClick={copyCreds}
                  className="text-[#136FF5] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Copy className="h-3 w-3" aria-hidden="true" />
                  <span>{copied ? "Disalin!" : "Salin Kredensial"}</span>
                </button>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
            <span>Butuh bantuan kendala login?</span>
            <a
              href="https://wa.me/6281227153679"
              target="_blank"
              rel="noreferrer"
              className="text-[#136FF5] hover:text-blue-400 font-medium flex items-center gap-1"
            >
              <MessageCircle className="h-3 w-3 fill-current" aria-hidden="true" />
              <span>Hubungi CS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
