"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Bagaimana cara akun dikirim setelah saya melakukan pembayaran?",
    a: "Setelah pembayaran via QRIS atau Transfer Bank terverifikasi, sistem otomatis kami langsung menampilkan email, password, dan panduan login di layar website Anda. Salinan kredensial juga otomatis dikirimkan ke nomor WhatsApp Anda dalam waktu kurang dari 60 detik.",
  },
  {
    q: "Apakah akun yang dijual berstatus Private atau Sharing?",
    a: "Sebagian besar produk utama kami seperti Google Gemini Advanced, ChatGPT Plus, Claude Pro, dan Cursor Pro adalah Akun Private (akun baru khusus untuk Anda sendiri tanpa dicampur orang lain). Kami juga menyediakan opsi Sharing ekonomis bagi yang mencari harga paling terjangkau.",
  },
  {
    q: "Bisa pakai email pribadi saya sendiri?",
    a: "Untuk produk seperti Canva Pro dan YouTube Premium, sistem kami menggunakan metode invite resmi langsung ke email Google/Canva pribadi Anda, sehingga riwayat desain dan playlist lama Anda tetap aman 100%. Untuk produk seperti Gemini & ChatGPT disediakan akun private baru siap pakai.",
  },
  {
    q: "Bagaimana cara klaim garansi jika akun terkena logout atau kendala?",
    a: "Sangat mudah. Anda cukup membuka fitur 'Cek Pesanan' di website ini atau langsung mengirimkan nomor pesanan ke CS WhatsApp kami. Tim kami akan mengecek dan langsung memberikan akun pengganti (replacement) secara gratis selama masa garansi aktif.",
  },
  {
    q: "Apakah perlu menggunakan VPN untuk memakai akun ini?",
    a: "Tidak perlu. Semua akun yang kami sediakan dapat diakses secara langsung dari jaringan internet Indonesia (Telkomsel, Indihome, Biznet, XL, dll) tanpa memerlukan VPN.",
  },
  {
    q: "Metode pembayaran apa saja yang didukung?",
    a: "Kami menerima pembayaran instan via QRIS (BCA Mobile, Livin Mandiri, GoPay, OVO, Dana, ShopeePay, LinkAja) serta Virtual Account Bank resmi. Tanpa biaya admin tersembunyi.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-zinc-300">
            Segala informasi penting seputar cara pemesanan, sistem pengiriman, dan garansi akun.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-zinc-100 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
