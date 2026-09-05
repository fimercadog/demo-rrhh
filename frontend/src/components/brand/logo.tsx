import { cn } from "@/lib/utils";

const heights = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
  xl: "h-16 sm:h-20",
};

function LogoGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-full w-full", className)} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="var(--primary)" />
      <path d="M11 8h6a8 8 0 1 1 0 16h-6z" fill="var(--primary-foreground)" />
      <path d="M14 11h3a5 5 0 1 1 0 10h-3z" fill="var(--primary)" />
    </svg>
  );
}

export function LogoMark({ size = "md", className }: { size?: keyof typeof heights; className?: string }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl", heights[size], "aspect-square", className)}>
      <LogoGlyph />
    </span>
  );
}

export function Logo({ size = "md", className }: { size?: keyof typeof heights; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className={cn("shrink-0 overflow-hidden rounded-xl", heights[size], "aspect-square")}>
        <LogoGlyph />
      </span>
      <span className={cn("font-semibold leading-none text-foreground", size === "sm" ? "text-base" : size === "md" ? "text-lg" : size === "lg" ? "text-xl" : "text-2xl")}>
        Demo RRHH
      </span>
    </span>
  );
}
