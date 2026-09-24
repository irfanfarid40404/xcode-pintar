/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

export interface HeaderProps {
  navigationData: NavigationSection[];
  className?: string;
  brandName?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeaderActionBtn = ({
  className,
  text = "Pesan Cepat",
  href = "#katalog",
}: {
  className?: string;
  text?: string;
  href?: string;
}) => (
  <a href={href} className="inline-block">
    <Button
      className={cn(
        "relative text-xs sm:text-sm font-bold rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden cursor-pointer bg-[#136FF5] text-white hover:bg-[#0F65E5] shadow-md shadow-blue-500/25",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-500">{text}</span>
      <span className="absolute right-1 w-8 h-8 bg-zinc-950 text-[#136FF5] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Button>
  </a>
);

export function Header({
  navigationData,
  className,
  brandName = "Code Pintar",
  ctaText = "Pesan Cepat",
  ctaHref = "#katalog",
}: HeaderProps) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn(
        "inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20 pointer-events-none",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-4 transition-all duration-500 pointer-events-auto",
          sticky
            ? "p-2.5 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-blue-950/20 rounded-full"
            : "bg-zinc-950/40 backdrop-blur-md border border-zinc-800/60 rounded-full p-2.5"
        )}
      >
        {/* Brand Logo */}
        <div>
          <a
            href="#"
            className="flex items-center gap-2.5 px-2 group focus-visible:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 p-1 shadow-md shadow-blue-500/10 transition-transform group-hover:scale-105">
              <img
                src="/icon.png"
                alt="Code Pintar Icon"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                {brandName}
                <span className="rounded bg-blue-950 text-blue-400 border border-blue-800/80 px-1.5 py-0.2 text-[9px] font-mono">
                  PRO
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">Akun AI Premium</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden bg-zinc-900/80 border border-zinc-800/80 p-1 rounded-full">
            <NavigationMenuList className="flex gap-1">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-medium rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all",
                      navItem.isActive && "bg-zinc-800 text-white font-semibold"
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Action */}
        <div className="flex items-center gap-3">
          <HeaderActionBtn text={ctaText} href={ctaHref} className="hidden lg:flex" />

          {/* Mobile menu trigger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger id="mobile-menu-trigger">
                <span className="rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-300 hover:text-white block">
                  <Menu width={20} height={20} />
                  <span className="sr-only">Menu</span>
                </span>
              </SheetTrigger>

              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-full sm:w-80 p-0 border-l border-zinc-800 bg-zinc-950"
              >
                <div className="flex items-center justify-between p-6 border-b border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 p-1">
                      <img
                        src="/icon.png"
                        alt="Code Pintar Icon"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-bold text-white">{brandName}</span>
                  </div>
                  <SheetClose id="mobile-menu-close">
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 p-2 block text-zinc-400 hover:text-white">
                      <X width={16} height={16} />
                    </span>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-8 px-6 py-6 overflow-y-auto">
                  <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                  <NavigationMenu orientation="vertical" className="items-start flex-none">
                    <NavigationMenuList className="flex flex-col items-start gap-2 w-full">
                      {navigationData.map((item) => (
                        <NavigationMenuItem key={item.title} className="w-full">
                          <NavigationMenuLink
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center py-2 text-base font-semibold transition-all w-full",
                              item.isActive
                                ? "text-[#136FF5]"
                                : "text-zinc-400 hover:text-white"
                            )}
                          >
                            <span className="mr-2 text-[#136FF5] font-mono text-xs">/</span>
                            {item.title}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>

                  <div className="pt-4 border-t border-zinc-900">
                    <HeaderActionBtn
                      text={ctaText}
                      href={ctaHref}
                      className="w-full justify-between"
                    />
                  </div>

                  <div className="mt-auto pt-6 text-xs text-zinc-500 flex items-center gap-2">
                    <MessageCircle className="h-3.5 w-3.5 text-[#136FF5]" />
                    <span>Layanan Otomatis 24 Jam via QRIS</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
