import NextLink, { LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Props = LinkProps & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  children,
  target = "_self",
  ...props
}: Props) => {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  return (
    <NextLink href={href} target={target} rel={rel} {...props}>
      {children}
    </NextLink>
  );
};
