"use client";

import { Check, ArrowRight, ShieldCheck } from "lucide-react";

interface BundlingDealsProps {
  onBuyBundle: (bundleName: string, price: number, items: string[]) => void;
}

export function BundlingDeals({ onBuyBundle }: BundlingDealsProps) {
  const bundles = [
    {
      id: "gemini-head-pack",
      name: "Gemini Pro Head (18 Bulan Family)",
      tagline: "Paket lengkap akun Master Head 2TB untuk digunakan bersama keluarga atau tim sendiri",
      retailPrice: 5940000,
      bundlePrice: 40000,
      duration: "18 Bulan",
      badge: "Paling Populer",
      items: [
        "Google Gemini Advanced (2M Token Context)",
        "Google One 2TB Cloud Storage",
        "Akses Family Manager / Head Penuh",
      ],
      features: [
        "Bisa undang anggota keluarga/tim sendiri",
        "Garansi aktif 18 Bulan (Full Replace)",
        "Pengiriman akun otomatis < 60 detik",
      ],
    },
    {
      id: "gemini-invite-18m-pack",
      name: "Gemini Pro Invite (18 Bulan Email Pribadi)",
      tagline: "Langganan 1.5 tahun langsung aktif ke email Google pribadi Anda tanpa ribet ganti akun",
      retailPrice: 5940000,
      bundlePrice: 30000,
      duration: "18 Bulan",
      badge: "Rekomendasi Hemat",
      items: [
        "Aktivasi via Invite Resmi ke Gmail Anda",
        "Google Gemini 1.5 & 2.0 Pro Unlocked",
        "Data & privasi email lama tetap aman 100%",
      ],
      features: [
        "Pakai email Google pribadi Anda sendiri",
        "Garansi penuh 18 Bulan (Full Replace)",
        "Tanpa VPN & proses invite instan",
      ],
    },
    {
      id: "gemini-invite-12m-pack",
      name: "Gemini Pro Invite (12 Bulan Email Pribadi)",
      tagline: "Paket 1 tahun penuh hemat aktivasi invite resmi ke email Google sendiri",
      retailPrice: 3960000,
      bundlePrice: 20000,
      duration: "12 Bulan",
      badge: "Super Hemat",
      items: [
        "Aktivasi 1 Tahun Penuh ke Email Pribadi",
        "Gemini Advanced Context 2 Juta Token",
        "Integrasi Google Docs, Gmail & Drive",
      ],
      features: [
        "Cocok untuk mahasiswa, desainer & dev",
        "Garansi penuh 12 Bulan (Full Replace)",
        "Bantuan setup CS hingga aktif",
      ],
    },
  ];

  const formatIdr = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // return (
  //   <section id="bundling" className="py-20 md:py-28 border-b border-zinc-900 bg-zinc-950/70">
  //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //       <div className="max-w-3xl mb-12">
  //         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
  //           Paket Khusus Gemini Pro Terlengkap
  //         </h2>
  //         <p className="text-base text-zinc-300 leading-relaxed">
  //           Pilihan paket akun Head dan Invite resmi langsung aktif dengan garansi penuh penggantian akun.
  //         </p>
  //       </div>

  //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  //         {bundles.map((b) => {
  //           const savings = Math.round(((b.retailPrice - b.bundlePrice) / b.retailPrice) * 100);
  //           return (
  //             <div
  //               key={b.id}
  //               className="rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700/80 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
  //             >
  //               <div>
  //                 <div className="flex items-center justify-between mb-4">
  //                   <span className="rounded-full bg-[#136FF5] text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm shadow-blue-500/20">
  //                     {b.badge}
  //                   </span>
  //                   <span className="font-mono text-xs text-[#136FF5] font-semibold">
  //                     Hemat {savings}%
  //                   </span>
  //                 </div>

  //                 <h3 className="text-lg font-bold text-white mb-1.5">{b.name}</h3>
  //                 <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{b.tagline}</p>

  //                 {/* Included items */}
  //                 <div className="mb-6 space-y-2">
  //                   <div className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">
  //                     Benefit Paket:
  //                   </div>
  //                   {b.items.map((item) => (
  //                     <div
  //                       key={item}
  //                       className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-2 text-xs text-zinc-200 flex items-start gap-2"
  //                     >
  //                       <Check className="h-3.5 w-3.5 text-[#136FF5] shrink-0 mt-0.5" aria-hidden="true" />
  //                       <span className="font-medium">{item}</span>
  //                     </div>
  //                   ))}
  //                 </div>

  //                 {/* Key guarantees */}
  //                 <div className="space-y-1.5 text-xs text-zinc-400 border-t border-zinc-800/80 pt-4 mb-6">
  //                   {b.features.map((feat) => (
  //                     <div key={feat} className="flex items-center gap-2">
  //                       <ShieldCheck className="h-3.5 w-3.5 text-[#136FF5]" aria-hidden="true" />
  //                       <span>{feat}</span>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>

  //               {/* Bottom CTA */}
  //               <div>
  //                 <div className="flex items-baseline justify-between mb-4 border-t border-zinc-800/80 pt-4">
  //                   <div>
  //                     <div className="text-xs text-zinc-400 line-through font-mono">
  //                       {formatIdr(b.retailPrice)}
  //                     </div>
  //                     <div className="text-2xl font-black text-white font-mono">
  //                       {formatIdr(b.bundlePrice)}
  //                       <span className="text-xs font-normal text-zinc-400 ml-1">/ {b.duration}</span>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <button
  //                   type="button"
  //                   onClick={() => onBuyBundle(b.name, b.bundlePrice, b.items)}
  //                   className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#136FF5] hover:bg-[#0F65E5] py-3 text-sm font-bold text-white transition-all active:scale-[0.98] shadow-md shadow-blue-500/25 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#136FF5] focus-visible:outline-none"
  //                 >
  //                   <span>Beli Paket Ini</span>
  //                   <ArrowRight className="h-4 w-4" aria-hidden="true" />
  //                 </button>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );
}
