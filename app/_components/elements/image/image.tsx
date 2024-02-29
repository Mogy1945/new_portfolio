import NextImage, { ImageProps } from "next/image";

type Props = ImageProps;

export const Image = (props: Props) => {
  return <NextImage {...props} />;
};
