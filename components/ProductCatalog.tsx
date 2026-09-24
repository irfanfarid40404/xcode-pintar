"use client";

import { useState } from "react";
import { Product, ProductCategory, ProductVariant, PRODUCTS } from "@/types/product";
import { Zap, ShieldCheck, Check, ShoppingBag, Eye, Filter, Plus } from "lucide-react";

interface ProductCatalogProps {
  searchQuery: string;
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product, variant: ProductVariant) => void;
  onBuyNow: (p: Product, variant: ProductVariant) => void;
}

export function ProductCatalog({
  searchQuery,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Produk" },
    { id: "ai", label: "AI & LLM" },
    { id: "dev", label: "Coding & Dev" },
    { id: "design", label: "Desain Grafis" },
    { id: "streaming", label: "Streaming & Hiburan" },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    // Category match
    if (selectedCategory !== "all" && p.category !== selectedCategory) {
      return false;
    }
    // Type match
    if (selectedType !== "all") {
      if (selectedType === "private" && !p.accountType.includes("Private")) return false;
      if (selectedType === "sharing" && !p.accountType.includes("Sharing")) return false;
      if (selectedType === "invite" && !p.accountType.includes("Email Sendiri") && !p.accountType.includes("Invite")) return false;
    }
    // Search query match
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchTagline = p.tagline.toLowerCase().includes(q);
      const matchCategory = p.categoryLabel.toLowerCase().includes(q);
      const matchFeatures = p.features.some((f) => f.toLowerCase().includes(q));
      return matchName || matchTagline || matchCategory || matchFeatures;
    }
    return true;
  });

  const formatIdr = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="katalog" className="py-16 md:py-24 border-b border-zinc-900 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Pilihan Akun & Layanan AI Populer
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Semua akun telah diverifikasi, legal, dan langsung aktif otomatis setelah pembayaran.
            </p>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            Menampilkan <span className="font-bold text-white">{filteredProducts.length}</span> produk
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id as ProductCategory)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                  selectedCategory === c.id
                    ? "bg-white text-zinc-950 font-bold shadow-sm"
                    : "border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-850"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Account Type Filter */}
          <div className="flex items-center gap-2 text-xs">
            <Filter className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              aria-label="Filter tipe akun"
              className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
            >
              <option value="all">Semua Tipe Akun</option>
              <option value="private">Khusus Private (Akun Baru)</option>
              <option value="invite">Khusus Email Sendiri (Invite)</option>
              <option value="sharing">Khusus Sharing (Hemat)</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed border-zinc-800 p-8">
            <p className="text-zinc-400 text-sm font-medium">Tidak ada produk yang cocok dengan pencarian Anda.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedType("all");
              }}
              className="mt-3 text-xs text-emerald-400 hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.retailPrice - product.storePrice) / product.retailPrice) * 100
              );
              const defaultVariant = product.variants[0];

              return (
                <div
                  key={product.id}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700/80 hover:bg-zinc-900/70 p-5 sm:p-6 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                          {product.categoryLabel}
                        </span>
                        {product.instantDelivery && (
                          <span className="rounded-md border border-emerald-900/60 bg-emerald-950/50 px-2 py-0.5 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <Zap className="h-3 w-3 fill-current" aria-hidden="true" />
                            <span>Instan</span>
                          </span>
                        )}
                      </div>

                      {product.badgeText && (
                        <span className="rounded-full bg-emerald-400 text-emerald-950 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                          {product.badgeText}
                        </span>
                      )}
                    </div>

                    {/* Product Title & Tagline */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed mt-1 line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Feature Bullets */}
                    <div className="my-4 space-y-1.5 border-t border-b border-zinc-800/80 py-3 text-xs text-zinc-300">
                      {product.features.slice(0, 3).map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Account Specs Meta */}
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-4">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        Garansi {product.warrantyDays} Hari
                      </span>
                      <span className="text-zinc-400">
                        {product.accountType}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom / Pricing & CTAs */}
                  <div className="pt-2">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-400 line-through font-mono">
                            {formatIdr(product.retailPrice)}
                          </span>
                          <span className="rounded bg-rose-950/80 border border-rose-900/60 px-1.5 py-0.2 text-[10px] font-bold text-rose-300 font-mono">
                            Hemat {discountPercent}%
                          </span>
                        </div>
                        <div className="text-2xl font-black text-white tracking-tight mt-0.5">
                          {formatIdr(product.storePrice)}
                          <span className="text-xs font-normal text-zinc-400 ml-1 font-mono">
                            / {product.duration}
                          </span>
                        </div>
                      </div>

                      <div className="text-right text-[10px] font-mono text-zinc-400">
                        <span className="text-emerald-400 font-medium">Stok: {product.stock} akun</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-12 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="col-span-5 inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Detail</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onAddToCart(product, defaultVariant)}
                        title="Tambah ke Keranjang"
                        aria-label="Tambah ke Keranjang"
                        className="col-span-2 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 py-2.5 text-xs text-zinc-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onBuyNow(product, defaultVariant)}
                        className="col-span-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white hover:bg-zinc-100 py-2.5 text-xs font-bold text-zinc-950 transition-all active:scale-[0.98] shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Beli</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
