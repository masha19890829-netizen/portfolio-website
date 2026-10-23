import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const itemVariants = cva(
  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        active: "bg-accent text-accent-foreground",
        disabled: "pointer-events-none opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  icon?: React.ReactNode
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(itemVariants({ variant }), className)}
        {...props}
      >
        {icon}
        {children}
      </div>
    )
  }
)
Item.displayName = "Item"

export { Item, itemVariants }
