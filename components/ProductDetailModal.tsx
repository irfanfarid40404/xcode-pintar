"use client";

import { useState, useEffect } from "react";
import { Product, ProductVariant } from "@/types/product";
import { X, Check, Zap, ShoppingBag, ArrowRight, Lock } from "lucide-react";

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (p: Product, variant: ProductVariant) => void;
  onBuyNow: (p: Product, variant: ProductVariant) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}: ProductDetailModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!selectedVariant) return null;

  const formatIdr = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const discountPercent = Math.round(
    ((selectedVariant.retailPrice - selectedVariant.price) / selectedVariant.retailPrice) * 100
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 bg-zinc-950/60">
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs font-mono text-zinc-300">
              {product.categoryLabel}
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <Zap className="h-3 w-3 fill-current" aria-hidden="true" />
              <span>Pengiriman Otomatis &lt; 60 Dtk</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail produk"
            className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <p className="text-sm text-zinc-300 leading-relaxed mt-1">{product.description}</p>
          </div>

          {/* Variant Selector */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
              Pilih Durasi & Tipe Akun:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {product.variants.map((v) => {
                const isSelected = selectedVariant.id === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                      isSelected
                        ? "border-emerald-500 bg-zinc-800/90 shadow-md"
                        : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{v.name}</div>
                    <div className="text-base font-extrabold text-emerald-400 font-mono mt-1">
                      {formatIdr(v.price)}
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Tipe: {v.type}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 line-through font-mono">
                  {formatIdr(selectedVariant.retailPrice)}
                </span>
                <span className="rounded bg-rose-950 text-rose-300 border border-rose-900 px-1.5 py-0.2 text-[10px] font-bold font-mono">
                  Hemat {discountPercent}%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                {formatIdr(selectedVariant.price)}
                <span className="text-xs font-normal text-zinc-400 ml-1 font-mono">
                  / {selectedVariant.duration}
                </span>
              </div>
            </div>

            <div className="text-right text-xs font-mono">
              <div className="text-emerald-400 font-semibold">Tersedia: {product.stock} Akun</div>
              <div className="text-zinc-400 text-[11px] mt-0.5">Garansi {product.warrantyDays} Hari Penuh</div>
            </div>
          </div>

          {/* Feature List */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Fitur Premium yang Didapatkan:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {product.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/60">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Login & Delivery Instructions */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 space-y-2 text-xs">
            <div className="font-semibold text-zinc-200 flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>Metode Login & Pengiriman:</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">{product.loginMethod}</p>
            <p className="text-zinc-400 text-[11px] pt-1 border-t border-zinc-800/80">
              Kredensial login (Email, Password, Panduan) otomatis muncul di layar setelah pembayaran QRIS/Transfer terverifikasi dan salinannya dikirim ke WhatsApp Anda.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onAddToCart(product, selectedVariant);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-750 py-3 text-sm font-semibold text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              <span>+ Tambah ke Keranjang</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onBuyNow(product, selectedVariant);
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-100 py-3 text-sm font-bold text-zinc-950 transition-all active:scale-[0.98] shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              <span>Beli Sekarang (Langsung Bayar)</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
