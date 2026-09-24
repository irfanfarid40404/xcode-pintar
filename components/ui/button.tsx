import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:pointer-events-none disabled:opacity-50 select-none",
          variant === "default" && "bg-emerald-400 text-zinc-950 hover:bg-emerald-300 shadow-sm",
          variant === "outline" && "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-white",
          variant === "ghost" && "bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white",
          variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
          size === "default" && "h-10 px-4 py-2 text-sm rounded-xl",
          size === "sm" && "h-8 px-3 text-xs rounded-lg",
          size === "lg" && "h-12 px-6 text-base rounded-2xl",
          size === "icon" && "h-10 w-10 rounded-xl",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
