import * as React from "react"
import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center rounded-md border border-input bg-background focus-within:ring-1 focus-within:ring-ring",
      className
    )}
    {...props}
  />
))
InputGroup.displayName = "InputGroup"

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex items-center px-3 text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
InputGroupText.displayName = "InputGroupText"

export { InputGroup, InputGroupText }
