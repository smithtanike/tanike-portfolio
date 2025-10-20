import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-m font-semibold transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-500",
        secondary: "bg-gray-700 text-gray-100 hover:bg-gray-600",
        success: "bg-green-600 text-white hover:bg-green-500",
        warning: "bg-yellow-500 text-black hover:bg-yellow-400",
        destructive: "bg-red-600 text-white hover:bg-red-500",
        outline: "border border-gray-400 text-gray-200",
        custom: "border border-gray-400 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
