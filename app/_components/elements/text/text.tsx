import { ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  children: ReactNode;
  variant: "normal" | "xl";
};

const variantStyle = {
  normal: "text-base",
  xl: "text-xl font-bold",
};

export const Text = ({ children, variant }: Props) => {
  return <p className={clsx(variantStyle[variant])}>{children}</p>;
};
