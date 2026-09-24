"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function NavigationMenu({
  children,
  className,
  orientation = "horizontal",
}: {
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <nav
      className={cn(
        "relative z-10 flex max-w-max items-center justify-center",
        className
      )}
      data-orientation={orientation}
    >
      {children}
    </nav>
  );
}

export function NavigationMenuList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}>
      {children}
    </ul>
  );
}

export function NavigationMenuItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={cn("relative", className)}>{children}</li>;
}

export function NavigationMenuLink({
  children,
  className,
  href,
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
