"use client";

import { Star, CheckCircle } from "lucide-react";

export function CustomerReviews() {
  const reviews = [
    {
      name: "Dimas Aditya",
      role: "Fullstack Developer",
      product: "Cursor Pro + Gemini Advanced",
      date: "Kemarin",
      rating: 5,
      content:
        "Beli Cursor Pro dan Gemini di sini prosesnya gila cepet banget. Habis scan QRIS gak nyampe semenit kredensial udah dikirim ke WA. Fitur composer jalan lancar tanpa kendala.",
    },
    {
      name: "Siti Rahmawati",
      role: "UI/UX Designer",
      product: "Canva Pro 1 Tahun",
      date: "3 hari lalu",
      rating: 5,
      content:
        "Canva Pro langsung aktif di email pribadi saya sendiri! Template dan Magic Studio kebuka semua. Sangat ngebantu kerjaan klien tanpa harus bayar mahal langganan kartu kredit luar.",
    },
    {
      name: "Bayu Wicaksono",
      role: "AI Researcher & Content Creator",
      product: "ChatGPT Plus & Claude Pro",
      date: "1 minggu lalu",
      rating: 5,
      content:
        "Udah 3 bulan langganan Claude Sonnet dan ChatGPT di Code Pintar. Waktu ada kendala reset login, CS langsung respon di WhatsApp dan ganti kredensial dalam 5 menit. Recommended!",
    },
    {
      name: "Andi Prasetyo",
      role: "Mahasiswa Informatika",
      product: "Google Gemini Advanced",
      date: "2 minggu lalu",
      rating: 5,
      content:
        "Konteks 2 juta token Gemini bener-bener berguna buat ngerangkum skripsi dan paper ratusan halaman. Harganya super murah dibanding langganan resmi $20/bulan. Mantap.",
    },
  ];

  return (
    <section id="ulasan" className="py-20 md:py-28 border-b border-zinc-900 bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Ulasan Nyata dari Pengguna Setia
            </h2>
            <p className="text-base text-zinc-300">
              Pengalaman langsung para developer, desainer, dan kreator yang telah mempercayakan tool digital mereka.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                  <span className="text-xs font-mono text-zinc-400 ml-1.5">{r.date}</span>
                </div>

                <p className="text-xs text-zinc-200 leading-relaxed mb-6 font-normal">
                  “{r.content}”
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{r.name}</span>
                  <CheckCircle className="h-3.5 w-3.5 text-[#136FF5] shrink-0" aria-hidden="true" />
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{r.role}</div>
                <div className="mt-2 inline-block rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-blue-400">
                  {r.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
