export type ProductCategory = "all" | "head" | "invite" | "ai" | "dev" | "design" | "streaming" | "productivity";

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  retailPrice: number;
  duration: string;
  type: "Private" | "Sharing" | "Invite" | "Head";
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  retailPrice: number;
  storePrice: number;
  duration: string;
  accountType: "Akun Head (Master)" | "Invite (Email Sendiri)" | "Private (Akun Baru)" | "Private (Email Sendiri)" | "Sharing Ekonomis" | "Invite Tim";
  warrantyDays: number;
  features: string[];
  popular?: boolean;
  stock: number;
  instantDelivery: boolean;
  rating: number;
  reviewsCount: number;
  badgeText?: string;
  description: string;
  loginMethod: string;
  variants: ProductVariant[];
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "gemini-pro-head-18m",
    name: "Google Gemini Pro Head (18 Bulan)",
    tagline: "Akun Head / Master Family 2TB dengan akses Gemini 1.5 & 2.0 Pro aktif 18 bulan penuh",
    category: "head",
    categoryLabel: "Akun Head (Master)",
    retailPrice: 5940000,
    storePrice: 40000,
    duration: "18 Bulan",
    accountType: "Akun Head (Master)",
    warrantyDays: 540,
    popular: true,
    stock: 25,
    instantDelivery: true,
    rating: 5.0,
    reviewsCount: 384,
    badgeText: "Paling Lengkap",
    description:
      "Akun Google Head (Family Manager) dengan langganan Gemini Advanced aktif 18 bulan. Termasuk Google One 2TB, bisa untuk mengundang anggota keluarga/tim sendiri, dan bebas ganti password.",
    loginMethod: "Kredensial email & password akun Head baru langsung dikirim otomatis setelah pemesanan.",
    features: [
      "Gemini 1.5 Pro & 2.0 Flash/Thinking",
      "Kapasitas Head (Family Manager Kuota 2TB)",
      "Bisa undang anggota keluarga/tim sendiri",
      "Context window hingga 2.000.000 token",
      "Analisis dokumen PDF, audio, video raksasa",
      "Garansi penuh 18 Bulan (Full Replace)",
    ],
    variants: [
      {
        id: "gemini-head-18m",
        name: "18 Bulan Head (Master)",
        price: 40000,
        retailPrice: 5940000,
        duration: "18 Bulan",
        type: "Head",
      },
    ],
  },
  {
    id: "gemini-pro-invite-18m",
    name: "Google Gemini Pro Invite (18 Bulan)",
    tagline: "Aktivasi via invite resmi ke email Google pribadi Anda tanpa ganti email, aktif 18 bulan",
    category: "invite",
    categoryLabel: "Invite Email Pribadi",
    retailPrice: 5940000,
    storePrice: 30000,
    duration: "18 Bulan",
    accountType: "Invite (Email Sendiri)",
    warrantyDays: 540,
    popular: true,
    stock: 40,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 520,
    badgeText: "Paling Populer",
    description:
      "Upgrade akun Google pribadi Anda dengan undangan resmi (Family Invite). Akses Gemini Advanced 1.5 & 2.0 Pro dengan Google One cloud storage selama 18 bulan. Privasi email dan data lama Anda 100% aman.",
    loginMethod: "Cukup cantumkan alamat email Google Anda, undangan resmi langsung dikirim ke inbox email.",
    features: [
      "Bisa pakai email Google pribadi Anda sendiri",
      "Semua data, chat, dan drive lama Anda tetap aman",
      "Akses penuh fitur Gemini Advanced 18 Bulan",
      "Context window hingga 2.000.000 token",
      "Integrasi langsung ke Docs, Gmail & Drive",
      "Garansi penuh 18 Bulan (Full Replace)",
    ],
    variants: [
      {
        id: "gemini-invite-18m",
        name: "18 Bulan Invite (Email Pribadi)",
        price: 30000,
        retailPrice: 5940000,
        duration: "18 Bulan",
        type: "Invite",
      },
    ],
  },
  {
    id: "gemini-pro-invite-12m",
    name: "Google Gemini Pro Invite (12 Bulan)",
    tagline: "Paket hemat aktivasi invite email Google sendiri untuk akses Gemini Pro selama 1 tahun",
    category: "invite",
    categoryLabel: "Invite Email Pribadi",
    retailPrice: 3960000,
    storePrice: 20000,
    duration: "12 Bulan",
    accountType: "Invite (Email Sendiri)",
    warrantyDays: 365,
    popular: true,
    stock: 65,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 642,
    badgeText: "Super Hemat",
    description:
      "Aktivasi Gemini Advanced resmi selama 12 bulan (1 tahun) ke email Google Anda. Dapatkan context window 2 juta token, analisis file/coding, dan benefit Google One tanpa risiko banned.",
    loginMethod: "Undangan invite resmi dikirimkan langsung ke email Google Anda secara otomatis.",
    features: [
      "Bisa pakai email Google pribadi Anda",
      "Durasi langganan aktif 12 Bulan (1 Tahun Penuh)",
      "Akses model AI tercanggih Google Gemini Pro",
      "Context window hingga 2.000.000 token",
      "Tanpa VPN & support semua provider Indonesia",
      "Garansi penuh 12 Bulan (Full Replace)",
    ],
    variants: [
      {
        id: "gemini-invite-12m",
        name: "12 Bulan Invite (Email Pribadi)",
        price: 20000,
        retailPrice: 3960000,
        duration: "12 Bulan",
        type: "Invite",
      },
    ],
  },
];
