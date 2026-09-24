export type ProductCategory = "all" | "ai" | "dev" | "design" | "streaming" | "productivity";

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  retailPrice: number;
  duration: string;
  type: "Private" | "Sharing" | "Invite";
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
  accountType: "Private (Akun Baru)" | "Private (Email Sendiri)" | "Sharing Ekonomis" | "Invite Tim";
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
    id: "gemini-advanced",
    name: "Google Gemini Advanced (Pro)",
    tagline: "Akses Gemini 1.5 & 2.0 Pro dengan context window 2 Juta token & 2TB Google One",
    category: "ai",
    categoryLabel: "AI & LLM",
    retailPrice: 330000,
    storePrice: 45000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: true,
    stock: 28,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 412,
    badgeText: "Terlaris",
    description:
      "Akun Google premium dengan langganan Gemini Advanced aktif. Model AI tercanggih dari Google untuk analisis file raksasa, video, audio, dan coding kompleks. Termasuk bonus cloud storage 2TB.",
    loginMethod: "Diberikan email & password baru langsung dari sistem (bisa ganti password).",
    features: [
      "Gemini 1.5 Pro & 2.0 Flash/Thinking",
      "Context window hingga 2.000.000 token",
      "Bonus 2 TB Google Drive / Google One",
      "Analisis dokumen PDF, audio, video ukuran besar",
      "Integrasi langsung ke Google Docs & Gmail",
      "Garansi ganti akun 30 hari penuh",
    ],
    variants: [
      { id: "gemini-1m", name: "1 Bulan Private", price: 45000, retailPrice: 330000, duration: "1 Bulan", type: "Private" },
      { id: "gemini-3m", name: "3 Bulan Private", price: 120000, retailPrice: 990000, duration: "3 Bulan", type: "Private" },
      { id: "gemini-1y", name: "1 Tahun Private", price: 390000, retailPrice: 3960000, duration: "1 Tahun", type: "Private" },
    ],
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (GPT-4o & o1)",
    tagline: "Akses prioritas model GPT-4o, o1-preview, DALL-E 3 & fitur Advanced Voice Mode",
    category: "ai",
    categoryLabel: "AI & LLM",
    retailPrice: 350000,
    storePrice: 65000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: true,
    stock: 19,
    instantDelivery: true,
    rating: 5.0,
    reviewsCount: 820,
    badgeText: "Pilihan Utama",
    description:
      "Akun resmi OpenAI dengan langganan ChatGPT Plus aktif. Tanpa limit antrean jam sibuk, akses model penalaran mendalam o1, upload file data analyst, dan pembuatan custom GPTs.",
    loginMethod: "Email & password OpenAI siap pakai, akses private tanpa sharing dengan pengguna lain.",
    features: [
      "Akses penuh GPT-4o & GPT-4o mini",
      "Model penalaran reasoning o1 & o1-mini",
      "Advanced Voice Mode berbicara real-time",
      "Pembuatan gambar tak terbatas DALL-E 3",
      "Custom GPTs & code interpreter",
      "Garansi ganti baru selama masa aktif",
    ],
    variants: [
      { id: "gpt-1m-p", name: "1 Bulan Private", price: 65000, retailPrice: 350000, duration: "1 Bulan", type: "Private" },
      { id: "gpt-1m-s", name: "1 Bulan Sharing (Hemat)", price: 35000, retailPrice: 350000, duration: "1 Bulan", type: "Sharing" },
      { id: "gpt-3m-p", name: "3 Bulan Private", price: 175000, retailPrice: 1050000, duration: "3 Bulan", type: "Private" },
    ],
  },
  {
    id: "claude-pro",
    name: "Claude Pro (Anthropic)",
    tagline: "Model Claude 3.5 Sonnet terbaik di dunia untuk coding, penulisan esai, dan logika",
    category: "ai",
    categoryLabel: "AI & LLM",
    retailPrice: 340000,
    storePrice: 75000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: true,
    stock: 14,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 290,
    badgeText: "Favorit Dev",
    description:
      "Akun Claude Pro dari Anthropic. Menawarkan 5x kapasitas pesan dibanding tier gratis, akses prioritas fitur Artifacts, dan kemampuan pemecahan kode pemrograman nomor satu di benchmark.",
    loginMethod: "Akun login private siap pakai, langsung bisa digunakan tanpa VPN.",
    features: [
      "Claude 3.5 Sonnet & Claude 3 Opus",
      "Kapasitas pesan 5x lebih tinggi",
      "Fitur interaktif Claude Artifacts",
      "Pemahaman kode pemrograman & debugging tercepat",
      "Analisis visual & diagram teknis",
      "Garansi aman & replace cepat",
    ],
    variants: [
      { id: "claude-1m", name: "1 Bulan Private", price: 75000, retailPrice: 340000, duration: "1 Bulan", type: "Private" },
      { id: "claude-3m", name: "3 Bulan Private", price: 210000, retailPrice: 1020000, duration: "3 Bulan", type: "Private" },
    ],
  },
  {
    id: "cursor-pro",
    name: "Cursor Pro (AI Code Editor)",
    tagline: "Editor coding berbasis VS Code bertenaga AI dengan fitur Composer & Chat codebase",
    category: "dev",
    categoryLabel: "Coding & Dev",
    retailPrice: 320000,
    storePrice: 55000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: true,
    stock: 22,
    instantDelivery: true,
    rating: 5.0,
    reviewsCount: 388,
    badgeText: "Top Dev Tool",
    description:
      "Tingkatkan kecepatan coding hingga 5x dengan Cursor Pro. Menulis, merefaktor, dan memperbaiki error di seluruh codebase secara otomatis menggunakan Claude 3.5 Sonnet dan GPT-4o.",
    loginMethod: "Email & password Cursor pribadi, langsung login di aplikasi Cursor desktop.",
    features: [
      "500 fast premium requests per bulan",
      "Unlimited slow Claude 3.5 Sonnet & GPT-4o",
      "Fitur Composer untuk build multi-file otomatis",
      "Index seluruh repository lokal Anda",
      "Terminal command auto-generate & debugging",
      "Garansi replace 30 hari",
    ],
    variants: [
      { id: "cursor-1m", name: "1 Bulan Private", price: 55000, retailPrice: 320000, duration: "1 Bulan", type: "Private" },
      { id: "cursor-3m", name: "3 Bulan Private", price: 150000, retailPrice: 960000, duration: "3 Bulan", type: "Private" },
    ],
  },
  {
    id: "midjourney-standard",
    name: "Midjourney Pro / Standard",
    tagline: "Generator gambar AI kualitas sinematik terbaik dengan lisensi komersial penuh",
    category: "design",
    categoryLabel: "Desain & Kreatif",
    retailPrice: 480000,
    storePrice: 60000,
    duration: "1 Bulan",
    accountType: "Sharing Ekonomis",
    warrantyDays: 30,
    popular: false,
    stock: 16,
    instantDelivery: true,
    rating: 4.8,
    reviewsCount: 195,
    description:
      "Akses generator ilustrasi, render 3D, dan fotografi AI terbaik di dunia. Hasil gambar realistis, kontrol style tuner, dan hak komersial untuk aset branding atau klien.",
    loginMethod: "Server Discord private khusus atau akun Discord langsung siap pakai.",
    features: [
      "Akses model Midjourney v6 & Niji v6",
      "Fast GPU Hours untuk render sekejap",
      "Unlimited Relax Mode GPU",
      "Lisensi komersial bebas hak cipta",
      "Garansi ganti baru selama 30 hari",
    ],
    variants: [
      { id: "mj-1m-s", name: "1 Bulan Sharing", price: 60000, retailPrice: 480000, duration: "1 Bulan", type: "Sharing" },
      { id: "mj-1m-p", name: "1 Bulan Private", price: 145000, retailPrice: 480000, duration: "1 Bulan", type: "Private" },
    ],
  },
  {
    id: "canva-pro",
    name: "Canva Pro Lifetime / 1 Tahun",
    tagline: "Desain grafis, presentasi, dan media sosial tanpa batas template & aset premium",
    category: "design",
    categoryLabel: "Desain & Kreatif",
    retailPrice: 150000,
    storePrice: 25000,
    duration: "1 Tahun",
    accountType: "Private (Email Sendiri)",
    warrantyDays: 365,
    popular: true,
    stock: 55,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 1420,
    badgeText: "Paling Hemat",
    description:
      "Upgrade akun Canva pribadi Anda ke Canva Pro! Akses 100+ juta foto/video stok, Magic Resize, hapus background otomatis dalam 1 klik, dan export SVG berkualitas tinggi.",
    loginMethod: "Cukup cantumkan email Canva Anda, kami kirimkan undangan join tim resmi.",
    features: [
      "Bisa pakai email pribadi sendiri (data lama aman)",
      "100+ juta foto, video, font, dan elemen premium",
      "Fitur Magic Studio AI (Background Remover, Magic Eraser)",
      "Kapasitas cloud storage 1TB",
      "Export transparansi & resolusi ultra high (SVG/PNG)",
      "Garansi aktif 1 tahun penuh",
    ],
    variants: [
      { id: "canva-1y", name: "1 Tahun (Email Sendiri)", price: 25000, retailPrice: 150000, duration: "1 Tahun", type: "Invite" },
      { id: "canva-life", name: "Lifetime Access", price: 45000, retailPrice: 450000, duration: "Lifetime", type: "Invite" },
    ],
  },
  {
    id: "perplexity-pro",
    name: "Perplexity Pro AI",
    tagline: "Mesin pencari berbasis AI dengan sitasi sumber akurat dan akses multi-LLM",
    category: "ai",
    categoryLabel: "AI & LLM",
    retailPrice: 320000,
    storePrice: 40000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: false,
    stock: 20,
    instantDelivery: true,
    rating: 4.8,
    reviewsCount: 164,
    description:
      "Jawaban berbasis riset lengkap dengan link referensi valid. Bebas pilih model LLM sesuka hati: Claude 3.5 Sonnet, GPT-4o, atau Sonar Large.",
    loginMethod: "Akun login baru siap pakai.",
    features: [
      "300+ Pro Searches per hari",
      "Bebas beralih antara Claude 3.5 & GPT-4o",
      "Upload file PDF, dataset, dokumen tak terbatas",
      "Generate visual langsung di hasil pencarian",
      "Garansi 30 hari",
    ],
    variants: [
      { id: "perp-1m", name: "1 Bulan Private", price: 40000, retailPrice: 320000, duration: "1 Bulan", type: "Private" },
      { id: "perp-3m", name: "3 Bulan Private", price: 110000, retailPrice: 960000, duration: "3 Bulan", type: "Private" },
    ],
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot Individual",
    tagline: "Asisten AI terintegrasi di VS Code, JetBrains & Neovim untuk auto-complete cepat",
    category: "dev",
    categoryLabel: "Coding & Dev",
    retailPrice: 160000,
    storePrice: 35000,
    duration: "1 Bulan",
    accountType: "Private (Akun Baru)",
    warrantyDays: 30,
    popular: false,
    stock: 18,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 240,
    description:
      "Tulis kode lebih cepat dengan saran cerdas per baris atau seluruh fungsi. Terintegrasi langsung dengan editor favorit Anda.",
    loginMethod: "Akun GitHub dengan status lisensi Copilot aktif.",
    features: [
      "Autocomplete real-time puluhan bahasa pemrograman",
      "Copilot Chat di sidebar IDE",
      "Dukungan VS Code, Visual Studio, JetBrains, Neovim",
      "Garansi 30 hari penuh",
    ],
    variants: [
      { id: "copilot-1m", name: "1 Bulan", price: 35000, retailPrice: 160000, duration: "1 Bulan", type: "Private" },
      { id: "copilot-3m", name: "3 Bulan", price: 95000, retailPrice: 480000, duration: "3 Bulan", type: "Private" },
    ],
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium & Music",
    tagline: "Nonton video tanpa iklan, putar musik di background, dan download video offline",
    category: "streaming",
    categoryLabel: "Streaming & Hiburan",
    retailPrice: 59000,
    storePrice: 20000,
    duration: "1 Bulan",
    accountType: "Private (Email Sendiri)",
    warrantyDays: 30,
    popular: false,
    stock: 40,
    instantDelivery: true,
    rating: 4.9,
    reviewsCount: 950,
    description:
      "Nikmati pengalaman YouTube tanpa jeda iklan sponsor di HP, Smart TV, dan Laptop. Termasuk langganan YouTube Music kualitas tinggi.",
    loginMethod: "Invite via email Google pribadi Anda tanpa ganti akun.",
    features: [
      "Bebas iklan di seluruh video YouTube",
      "Putar di latar belakang saat layar mati",
      "Download video untuk ditonton offline",
      "Termasuk YouTube Music Premium",
      "Garansi aktif 100%",
    ],
    variants: [
      { id: "yt-1m", name: "1 Bulan (Email Sendiri)", price: 20000, retailPrice: 59000, duration: "1 Bulan", type: "Invite" },
      { id: "yt-3m", name: "3 Bulan (Email Sendiri)", price: 50000, retailPrice: 177000, duration: "3 Bulan", type: "Invite" },
    ],
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium Individual",
    tagline: "Streaming lagu tanpa jeda iklan, skip tanpa batas, dan audio kualitas master 320kbps",
    category: "streaming",
    categoryLabel: "Streaming & Hiburan",
    retailPrice: 54990,
    storePrice: 18000,
    duration: "1 Bulan",
    accountType: "Private (Email Sendiri)",
    warrantyDays: 30,
    popular: false,
    stock: 35,
    instantDelivery: true,
    rating: 4.8,
    reviewsCount: 780,
    description:
      "Dengarkan jutaan playlist dan podcast favorit tanpa gangguan iklan audio. Kualitas suara jernih dan bebas download offline.",
    loginMethod: "Proses aktivasi ke akun Spotify lama Anda atau akun baru.",
    features: [
      "Bebas iklan selamanya selama berlangganan",
      "Bisa skip lagu tanpa batas",
      "Kualitas streaming audio tertinggi (Very High 320kbps)",
      "Bisa download lagu untuk offline",
      "Garansi full replacement",
    ],
    variants: [
      { id: "spot-1m", name: "1 Bulan", price: 18000, retailPrice: 54990, duration: "1 Bulan", type: "Invite" },
      { id: "spot-3m", name: "3 Bulan", price: 48000, retailPrice: 164970, duration: "3 Bulan", type: "Invite" },
    ],
  },
];
