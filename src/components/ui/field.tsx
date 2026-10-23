import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const fieldVariants = cva(
  "flex flex-col gap-1.5",
  {
    variants: {
      variant: {
        default: "",
        inline: "flex-row items-center gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof fieldVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(fieldVariants({ variant }), className)}
    {...props}
  />
))
Field.displayName = "Field"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
))
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-destructive", className)}
    {...props}
  />
))
FieldError.displayName = "FieldError"

export { Field, FieldLabel, FieldDescription, FieldError }
