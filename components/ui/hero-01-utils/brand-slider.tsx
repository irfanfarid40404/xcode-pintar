/* eslint-disable @next/next/no-img-element */
"use client";

import { Marquee } from "./marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg?: string;
}

export interface BrandSliderProps {
  brandList: BrandList[];
  title?: string;
}

export function BrandSlider({
  brandList,
  title = "Dipercaya untuk langganan tools & akun AI resmi di Indonesia",
}: BrandSliderProps) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950/60 py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-col gap-4"
        >
          <div className="relative flex items-center justify-center text-center">
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-700" />
              <p className="text-xs sm:text-sm font-medium text-zinc-400 shrink-0 px-2 tracking-wide uppercase">
                {title}
              </p>
              <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-zinc-700 via-zinc-800 to-transparent" />
            </div>
          </div>

          {brandList && brandList.length > 0 && (
            <div className="py-2">
              <Marquee pauseOnHover className="[--duration:28s] [--gap:3rem]">
                {brandList.map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-4 py-2.5 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-zinc-850/80 group"
                  >
                    <img
                      src={brand.lightimg || brand.image}
                      alt={brand.name}
                      className="h-6 w-auto max-w-[120px] object-contain opacity-75 grayscale contrast-125 transition-all group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <span className="text-xs font-semibold tracking-tight text-zinc-400 group-hover:text-emerald-400 transition-colors">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandSlider;
