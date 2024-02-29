import { clsx } from "clsx";
import { ComponentProps } from "react";

type HeadingComponent = "h1" | "h2" | "h3" | "h4" | "h5";

type Props = ComponentProps<"h1"> & {
  as: HeadingComponent;
};

const variantStyle = {
  h1: "text-3xl font-bold leading-normal",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
};

export const Heading = ({ as, children }: Props) => {
  const Component = as;
  return <Component className={clsx(variantStyle[as])}>{children}</Component>;
};
