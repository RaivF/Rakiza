import type { ButtonHTMLAttributes, ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type FilterChipProps = {
  children: ReactNode
  selected?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type">

export function FilterChip({ children, selected, className, ...props }: FilterChipProps) {
  return (
    <Badge asChild variant="outline">
      <button
        type="button"
        className={cn(
          "cursor-pointer select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          selected
            ? "border-transparent bg-primary text-primary-foreground"
            : "hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </Badge>
  )
}
