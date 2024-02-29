import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export const Link = ({ href, children, target = "_self", ...props }: Props) => {
  return (
    <NextLink href={href} target={target} {...props}>
      {children}
    </NextLink>
  );
};
