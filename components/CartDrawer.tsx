"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/types/product";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle2,
  Copy,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string, delta: number) => void;
  onRemoveItem: (productId: string, variantId: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [step, setStep] = useState<"cart" | "confirmed">("cart");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("QRIS All Payment");
  const [notes, setNotes] = useState("");
  const [orderId, setOrderId] = useState("");
  const [waLink, setWaLink] = useState("");
  const [formattedMessage, setFormattedMessage] = useState("");
  const [copiedText, setCopiedText] = useState(false);

  const STORE_WA_NUMBER = "6281234567890"; // Nomor WhatsApp Toko

  const handleClose = () => {
    if (step === "confirmed") {
      setStep("cart");
    }
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (step === "confirmed") {
          setStep("cart");
        }
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, step]);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.variant.price * curr.quantity, 0);

  const formatIdr = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSubmitOrderToWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || items.length === 0) return;

    const newOrderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(newOrderId);

    // Build items text list
    const itemsText = items
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}*\n   - Varian: ${item.variant.name} (${item.variant.type})\n   - Jumlah: ${item.quantity}x\n   - Subtotal: ${formatIdr(item.variant.price * item.quantity)}`
      )
      .join("\n\n");

    const message = `Halo Admin PintarStore, saya ingin order akun digital via website:

*ID Pesanan:* ${newOrderId}

*Detail Pesanan:*
${itemsText}

*Total Pembayaran:* ${formatIdr(subtotal)}

*Data Pemesan:*
- Nama Lengkap: ${name.trim()}
- No. WhatsApp: ${whatsapp.trim()}
- Email Cadangan/Invite: ${email.trim() || "-"}
- Metode Pembayaran: ${paymentMethod}
- Catatan Tambahan: ${notes.trim() || "-"}

Mohon dicek dan kirimkan instruksi pembayarannya. Terima kasih!`;

    setFormattedMessage(message);
    const link = `https://wa.me/${STORE_WA_NUMBER}?text=${encodeURIComponent(message)}`;
    setWaLink(link);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(link, "_blank", "noopener,noreferrer");
    }

    setStep("confirmed");
  };

  const copyOrderMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-zinc-900 border-l border-zinc-800 h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <h3 className="text-sm font-bold text-white">
              {step === "cart" ? `Keranjang & Form Pemesanan (${items.length})` : "Pesanan Terhubung ke WhatsApp"}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup keranjang"
            className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {step === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="py-20 text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-400">
                    <X className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Keranjang Masih Kosong</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Pilih akun AI atau produk digital premium dari katalog kami untuk melanjutkan pemesanan.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-zinc-950 transition-colors mt-2 cursor-pointer"
                  >
                    <span>Mulai Belanja</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Items Summary in Cart */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Item yang Dipesan:
                    </div>
                    {items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.variant.id}`}
                        className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5 flex items-start justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">
                            {item.product.name}
                          </h4>
                          <div className="text-[11px] text-emerald-400 font-mono">
                            {item.variant.name} ({item.variant.type})
                          </div>
                          <div className="text-xs font-bold text-zinc-200 font-mono mt-1">
                            {formatIdr(item.variant.price * item.quantity)}
                          </div>
                        </div>

                        {/* Quantity and Delete */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900 p-0.5">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.variant.id, -1)
                              }
                              aria-label="Kurangi jumlah"
                              className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                            >
                              <Minus className="h-3 w-3" aria-hidden="true" />
                            </button>
                            <span className="w-5 text-center font-mono text-xs font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.variant.id, 1)
                              }
                              aria-label="Tambah jumlah"
                              className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                            >
                              <Plus className="h-3 w-3" aria-hidden="true" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id, item.variant.id)}
                            aria-label="Hapus produk"
                            className="p-1.5 text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Checkout Form */}
                  <form id="wa-checkout-form" onSubmit={handleSubmitOrderToWA} className="space-y-4 pt-2 border-t border-zinc-800/80">
                    <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Formulir Data Pembeli:
                    </div>

                    <div>
                      <label htmlFor="customer-name" className="block text-xs font-medium text-zinc-300 mb-1">
                        Nama Lengkap: <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-wa" className="block text-xs font-medium text-zinc-300 mb-1">
                        Nomor WhatsApp Aktif: <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="customer-wa"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Contoh: 081234567890"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 font-mono"
                      />
                      <span className="text-[10px] text-zinc-400 mt-1 block">
                        Admin akan mengirimkan kredensial akun dan verifikasi ke nomor ini.
                      </span>
                    </div>

                    <div>
                      <label htmlFor="customer-email" className="block text-xs font-medium text-zinc-300 mb-1">
                        Email (Opsional / untuk Invite Canva & YouTube):
                      </label>
                      <input
                        id="customer-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@gmail.com"
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-payment" className="block text-xs font-medium text-zinc-300 mb-1">
                        Rencana Metode Pembayaran:
                      </label>
                      <select
                        id="customer-payment"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-xs text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
                      >
                        <option value="QRIS All Payment">QRIS Instant (BCA, GoPay, OVO, Dana, ShopeePay)</option>
                        <option value="Transfer BCA">Transfer Bank BCA</option>
                        <option value="Transfer Mandiri">Transfer Bank Mandiri</option>
                        <option value="Transfer BRI / BNI">Transfer Bank BRI / BNI</option>
                        <option value="E-Wallet GoPay / Dana">E-Wallet GoPay / DANA</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="customer-notes" className="block text-xs font-medium text-zinc-300 mb-1">
                        Catatan Khusus (Opsional):
                      </label>
                      <textarea
                        id="customer-notes"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Contoh: Tolong proses segera / email canva pribadi saya: ..."
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 resize-none"
                      />
                    </div>
                  </form>
                </div>
              )}
            </>
          )}

          {/* STEP 2: CONFIRMED & WHATSAPP REDIRECTION STATE */}
          {step === "confirmed" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/30 p-5 text-center space-y-2">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="text-base font-bold text-white">Pesanan Siap Dikirim ke WhatsApp!</h4>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
                  Data form telah dirangkum ke dalam format pesan resmi WhatsApp untuk Admin PintarStore.
                </p>
              </div>

              {/* Order ID & Meta */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-zinc-800 pb-2 text-zinc-400">
                  <span>ID Pesanan:</span>
                  <span className="text-white font-bold">{orderId}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Nama Pemesan:</span>
                  <span className="text-zinc-200">{name}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Total Tagihan:</span>
                  <span className="text-emerald-400 font-bold">{formatIdr(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Metode Bayar:</span>
                  <span className="text-zinc-200">{paymentMethod}</span>
                </div>
              </div>

              {/* Direct Open WhatsApp Button */}
              <div className="space-y-2.5">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 py-3.5 text-sm font-bold text-emerald-950 transition-all shadow-lg cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
                  <span>Buka Chat WhatsApp Sekarang</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={copyOrderMessage}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-750 py-2.5 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{copiedText ? "Format Pesan Berhasil Disalin!" : "Salin Format Pesan Teks"}</span>
                </button>
              </div>

              {/* Instructions */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-xs text-zinc-400 space-y-2">
                <div className="font-semibold text-zinc-200">Langkah Selanjutnya di WhatsApp:</div>
                <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed">
                  <li>Kirim pesan template yang otomatis terisi di chat WhatsApp.</li>
                  <li>Admin akan membalas dengan barcode QRIS / Nomor Rekening resmi.</li>
                  <li>Lakukan pembayaran dan kirimkan bukti transfer.</li>
                  <li>Kredensial akun premium akan langsung dikirimkan oleh sistem dalam hitungan menit.</li>
                </ol>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClearCart();
                    handleClose();
                  }}
                  className="w-full py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-xs font-semibold text-zinc-300 transition-colors cursor-pointer"
                >
                  Selesai & Bersihkan Keranjang
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer (Step 1 Cart only) */}
        {step === "cart" && items.length > 0 && (
          <div className="border-t border-zinc-800 p-6 bg-zinc-950/80 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Total Item ({items.length})</span>
                <span className="font-mono text-zinc-300">{formatIdr(subtotal)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Biaya Admin & Layanan</span>
                <span className="text-emerald-400 font-mono">Rp 0 (Gratis)</span>
              </div>
              <div className="pt-2 border-t border-zinc-800 flex justify-between text-sm font-bold text-white">
                <span>Total Tagihan:</span>
                <span className="font-mono text-base text-emerald-400">{formatIdr(subtotal)}</span>
              </div>
            </div>

            <button
              type="submit"
              form="wa-checkout-form"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 py-3.5 text-sm font-bold text-emerald-950 transition-all active:scale-[0.98] shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <MessageCircle className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>Kirim Pesanan ke WhatsApp</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
