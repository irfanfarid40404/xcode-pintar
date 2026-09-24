"use client";

import { Star, CheckCircle } from "lucide-react";

export function CustomerReviews() {
  const reviews = [
    {
      name: "Dimas Aditya",
      role: "Fullstack Developer",
      product: "Gemini Pro Head 18 Bulan",
      date: "Kemarin",
      rating: 5,
      content:
        "Beli Gemini Pro Head 18 Bulan di sini prosesnya cepet banget. Habis bayar QRIS langsung dapat akun Head + Google One 2TB. Bisa undang anggota tim sendiri dan token 2 jutanya mantap buat olah codebase.",
    },
    {
      name: "Siti Rahmawati",
      role: "UI/UX Designer & Researcher",
      product: "Gemini Pro Invite 18 Bulan",
      date: "3 hari lalu",
      rating: 5,
      content:
        "Paket invite 18 bulan langsung aktif di email Google pribadi saya sendiri! Data drive dan email lama tetap aman 100%. Hemat banget cuma 30rb udah aktif 1.5 tahun.",
    },
    {
      name: "Bayu Wicaksono",
      role: "Content Creator & Data Analyst",
      product: "Gemini Pro Invite 12 Bulan",
      date: "1 minggu lalu",
      rating: 5,
      content:
        "Ambil yang invite 12 bulan cuma 20 ribu. CS ramah dan langsung dipandu sampai invite diterima di inbox Gmail. Fitur Gemini 2.0 Pro lancar jaya.",
    },
    {
      name: "Andi Prasetyo",
      role: "Mahasiswa Informatika",
      product: "Gemini Pro Head 18 Bulan",
      date: "2 minggu lalu",
      rating: 5,
      content:
        "Konteks 2 juta token Gemini bener-bener berguna buat ngerangkum skripsi dan paper ratusan halaman. Harganya cuma 40rb untuk 18 bulan, garansinya juga jelas.",
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
                {/* <div className="mt-2 inline-block rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-blue-400">
                  {r.product}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
