import { clsx } from "clsx";
import { ComponentProps } from "react";

type HeadingComponent = "h1" | "h2" | "h3" | "h4" | "h5";

type Props = ComponentProps<"h1"> & {
  as: HeadingComponent;
};

const variantStyle = {
    h1: "text-3xl md:text-4xl font-bold leading-tight",
  h2: "text-2xl md:text-3xl font-bold leading-tight",
  h3: "text-xl md:text-2xl font-semibold leading-snug",
  h4: "text-lg md:text-xl font-semibold leading-snug",
  h5: "text-base md:text-lg font-medium leading-normal",


export const Heading = ({ as, children }: Props) => {
  const Component = as;
  return <Component className={clsx(variantStyle[as])}>{children}</Component>;
};
