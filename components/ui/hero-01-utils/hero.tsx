/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight, Star, Search } from "lucide-react";

export type AvatarList = {
  image: string;
};

export interface HeroSectionProps {
  avatarList: AvatarList[];
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

export function HeroSection({
  avatarList,
  searchQuery = "",
  onSearchChange,
}: HeroSectionProps) {
  const popularKeywords = [
    { label: "Gemini Head 18 Bulan", query: "Head" },
    { label: "Gemini Invite 18 Bulan", query: "Invite 18" },
    { label: "Gemini Invite 12 Bulan", query: "Invite 12" },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16 bg-zinc-950">
      <div className="w-full h-full relative">
        {/* Subtle radial logo blue backdrop glow */}
        <div className="absolute inset-0 -top-24 mx-auto max-w-4xl h-96 bg-gradient-to-r from-blue-900/25 via-[#136FF5]/15 to-indigo-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8 sm:gap-10">
            {/* Headline with Serif Italic Accent */}
            <div className="relative flex flex-col text-center items-center gap-4 sm:gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12]"
              >
                Akses AI & Tools Premium dengan{" "}
                <span className="font-serif italic text-[#136FF5] font-normal tracking-tight">
                  resmi & bergaransi
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                className="text-sm sm:text-base md:text-lg font-normal max-w-2xl text-zinc-300 leading-relaxed"
              >
                Akses Google Gemini Advanced, ChatGPT Plus, Claude Pro, Cursor, dan Canva Pro tanpa ribet kartu kredit luar negeri. Akun langsung aktif dengan garansi full replace.
              </motion.p>
            </div>

            {/* Primary Action Button + Trust Avatars Stack */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center flex-col md:flex-row justify-center gap-6 sm:gap-8"
            >
              <a href="#katalog" className="cursor-pointer">
                <Button className="relative text-sm font-bold rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-[#136FF5] text-white hover:bg-[#0F65E5] shadow-lg shadow-blue-500/25">
                  <span className="relative z-10 transition-all duration-500">
                    Mulai Belanja Akun
                  </span>
                  <span className="absolute right-1 w-10 h-10 bg-zinc-950 text-[#136FF5] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Button>
              </a>

              <div className="flex items-center sm:gap-5 gap-3 bg-zinc-900/40 border border-zinc-800/80 rounded-full px-4 py-2 backdrop-blur-md">
                <ul className="flex flex-row items-center">
                  {avatarList.map((avatar, index) => (
                    <li key={index} className="-mr-2.5 z-10 transition-transform hover:scale-110">
                      <img
                        src={avatar.image}
                        alt="Customer Avatar"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full border-2 border-zinc-950 object-cover ring-1 ring-zinc-800"
                      />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start gap-0.5">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-zinc-400">
                    Dipercaya <span className="font-semibold text-white">1.000+</span> pembeli
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Live Search Bar Input (Integrated for Storefront catalog) */}
            {onSearchChange && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="max-w-xl w-full mx-auto"
              >
                <div className="relative flex items-center shadow-xl rounded-2xl border border-zinc-700/80 bg-zinc-900/90 backdrop-blur-md p-1.5 focus-within:border-[#136FF5] transition-colors">
                  <Search className="ml-3 h-5 w-5 text-zinc-400 shrink-0" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Cari akun: Gemini, ChatGPT, Claude, Cursor..."
                    className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => onSearchChange("")}
                      className="text-xs text-zinc-400 hover:text-white px-2 py-1 cursor-pointer"
                    >
                      Reset
                    </button>
                  )}
                  <a
                    href="#katalog"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-[#136FF5] hover:bg-[#0F65E5] px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
                  >
                    <span>Cari</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                {/* Quick Filter Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-zinc-400">
                  <span className="text-zinc-500 font-medium">Paling Dicari:</span>
                  {popularKeywords.map((kw) => (
                    <button
                      key={kw.label}
                      type="button"
                      onClick={() => onSearchChange(kw.query)}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/70 hover:bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {kw.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
