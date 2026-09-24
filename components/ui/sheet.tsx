"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

export function Sheet({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  children,
  className,
  id,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("SheetTrigger must be used within Sheet");

  return (
    <button
      id={id}
      type="button"
      className={cn("cursor-pointer", className)}
      onClick={() => context.setOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SheetClose({
  children,
  className,
  id,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("SheetClose must be used within Sheet");

  return (
    <button
      id={id}
      type="button"
      className={cn("cursor-pointer", className)}
      onClick={() => context.setOpen(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SheetTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("text-lg font-semibold text-white", className)}>{children}</h2>;
}

export function SheetContent({
  children,
  className,
  side = "right",
  showCloseButton = true,
}: {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  showCloseButton?: boolean;
}) {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("SheetContent must be used within Sheet");

  if (!context.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => context.setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed z-50 bg-zinc-950 border-zinc-800 text-zinc-100 shadow-2xl transition ease-in-out duration-300",
          side === "right" && "inset-y-0 right-0 h-full border-l",
          side === "left" && "inset-y-0 left-0 h-full border-r",
          side === "top" && "inset-x-0 top-0 border-b",
          side === "bottom" && "inset-x-0 bottom-0 border-t",
          className
        )}
      >
        {showCloseButton && (
          <button
            type="button"
            className="sr-only"
            onClick={() => context.setOpen(false)}
          >
            Tutup
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
