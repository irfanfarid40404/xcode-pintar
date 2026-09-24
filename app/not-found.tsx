import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 px-4 py-16 selection:bg-zinc-800 selection:text-white relative">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1 text-xs font-mono text-[#136FF5]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#136FF5]" aria-hidden="true" />
          <span>Error 404 · Page Not Found</span>
        </div>

        {/* Large Number */}
        <div className="text-7xl sm:text-8xl font-black tracking-tight text-white font-mono">
          404
        </div>

        {/* Heading & Subtext */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
            Tautan yang Anda tuju mungkin salah ketik, sudah dipindahkan, atau produk yang dicari telah diperbarui.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#136FF5] hover:bg-[#0F65E5] px-5 py-3 text-xs font-bold text-white transition-all active:scale-[0.98] shadow-md shadow-blue-500/25 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Kembali ke Beranda</span>
          </Link>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20Code%20Pintar,%20saya%20tersesat%20di%20halaman%20404"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 px-5 py-3 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
          >
            <MessageCircle className="h-4 w-4 text-[#136FF5] fill-current" aria-hidden="true" />
            <span>Hubungi Bantuan CS</span>
          </a>
        </div>

        {/* Quick Links Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 text-left text-xs space-y-3 pt-4">
          <div className="font-semibold text-zinc-300">Produk Populer yang Sering Dicari:</div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/#katalog"
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              Google Gemini Advanced
            </Link>
            <Link
              href="/#katalog"
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              ChatGPT Plus & o1
            </Link>
            <Link
              href="/#katalog"
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              Cursor Pro AI
            </Link>
            <Link
              href="/#katalog"
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              Canva Pro 1 Tahun
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
