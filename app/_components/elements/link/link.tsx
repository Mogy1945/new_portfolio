import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const Link = ({ href, children, target = "_self", ...props }: Props) => {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  return (
    <NextLink href={href} target={target} rel={rel} {...props}>
      {children}
    </NextLink>
  );
};
