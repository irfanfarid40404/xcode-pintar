"use client";

import { useState } from "react";
import { Product, ProductVariant, CartItem, PRODUCTS } from "@/types/product";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { BundlingDeals } from "@/components/BundlingDeals";
import { TrustGuarantee } from "@/components/TrustGuarantee";
import { CustomerReviews } from "@/components/CustomerReviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { CartDrawer } from "@/components/CartDrawer";
import { OrderTrackerModal } from "@/components/OrderTrackerModal";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([
    // Initial sample item for instant gratification and realistic marketplace feel
    {
      product: PRODUCTS[0], // Gemini Advanced
      variant: PRODUCTS[0].variants[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, variant: ProductVariant) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, variant, quantity: 1 }];
    });
  };

  const handleBuyNow = (product: Product, variant: ProductVariant) => {
    handleAddToCart(product, variant);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, variantId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.variant.id === variantId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant.id === variantId)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleBuyBundle = (bundleName: string, price: number, items: string[]) => {
    // Add custom bundle representation to cart
    const bundleProduct: Product = {
      id: `bundle-${Date.now()}`,
      name: bundleName,
      tagline: items.join(", "),
      category: "ai",
      categoryLabel: "Paket Bundling",
      retailPrice: price * 3,
      storePrice: price,
      duration: "1 Bulan",
      accountType: "Private (Akun Baru)",
      warrantyDays: 30,
      features: items,
      stock: 15,
      instantDelivery: true,
      rating: 5.0,
      reviewsCount: 120,
      description: `Paket bundling hemat mencakup: ${items.join(" + ")}.`,
      loginMethod: "Akun login untuk setiap layanan dikirimkan bersamaan via WhatsApp & Web.",
      variants: [
        {
          id: `var-${Date.now()}`,
          name: "Paket Bundling Lengkap",
          price,
          retailPrice: price * 3,
          duration: "1 Bulan",
          type: "Private",
        },
      ],
    };

    handleBuyNow(bundleProduct, bundleProduct.variants[0]);
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* Shopping Cart & QRIS Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Order Tracker Modal */}
      <OrderTrackerModal
        isOpen={isOrderTrackerOpen}
        onClose={() => setIsOrderTrackerOpen(false)}
      />

      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderTracker={() => setIsOrderTrackerOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Storefront Hero with Live Search */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Real-time Product Catalog */}
        <ProductCatalog
          searchQuery={searchQuery}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Bundling Special Deals */}
        <BundlingDeals onBuyBundle={handleBuyBundle} />

        {/* Guarantees & Trust Standards */}
        <TrustGuarantee />

        {/* Customer Reviews & Social Proof */}
        <CustomerReviews />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Modern Footer with Payment Badges */}
      <Footer />
    </div>
  );
}
