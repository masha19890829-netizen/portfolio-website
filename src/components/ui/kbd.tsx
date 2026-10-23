import * as React from "react"
import { cn } from "@/lib/utils"

const Kbd = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-mono font-medium",
      className
    )}
    {...props}
  />
))
Kbd.displayName = "Kbd"

export { Kbd }
