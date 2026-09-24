"use client";

import { ShieldCheck, Zap, Lock, Headphones } from "lucide-react";

export function TrustGuarantee() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Garansi Full Replacement",
      desc: "Jika akun mengalami kendala sebelum masa aktif habis, kami langsung gantikan akun baru tanpa biaya tambahan.",
    },
    {
      icon: Zap,
      title: "Pengiriman Otomatis 24/7",
      desc: "Sistem server otomatis memproses dan mengirim kredensial akun dalam 60 detik setelah pembayaran terverifikasi.",
    },
    {
      icon: Lock,
      title: "100% Legal & Aman",
      desc: "Metode aktivasi resmi menggunakan billing terverifikasi. Data pribadi dan privasi Anda terjamin aman tanpa resiko banned.",
    },
    {
      icon: Headphones,
      title: "Customer Support Responsif",
      desc: "Tim teknis kami siap memandu proses login, setup ekstensi, dan troubleshooting langsung via WhatsApp setiap hari.",
    },
  ];

  return (
    <section id="garansi" className="py-20 md:py-28 border-b border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Standar Keamanan & Garansi Code Pintar
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            Kami menjaga reputasi toko dengan menghadirkan akun premium yang stabil, transparan, dan bergaransi penuh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950/80 text-blue-400 border border-blue-900/60 mb-4 shadow-sm shadow-blue-500/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{g.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
