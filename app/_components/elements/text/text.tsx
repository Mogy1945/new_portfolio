import { ReactNode } from "react";
import { clsx } from "clsx";

// Define type for supported text variants
export type TextVariant = "sm" | "normal" | "lg" | "xl" | "2xl";

// Define component props with a variant (defaults to "normal" in the component)
interface Props {
  children: ReactNode;
  variant: TextVariant;
}

// Map each variant to Tailwind CSS classes for text sizing and weight
const variantStyle: Record<TextVariant, string> = {
  sm: "text-sm",
  normal: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl font-semibold",
};

// Text component renders a <p> element with classes based on the variant (default is "normal")
export const Text = ({ children, variant = "normal" }: Props) => {
  return <p className={clsx(variantStyle[variant])}>{children}</p>;
};
