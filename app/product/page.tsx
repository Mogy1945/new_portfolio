import type { Metadata } from "next";
import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Heading } from "@/app/_components/elements/heading";
import { Text } from "@/app/_components/elements/text";

export const metadata: Metadata = {
  title: "Mogy Portfolio | Product",
  description: "モギー（Mogy）が関わったプロダクトの一覧ページです。",
  alternates: {
    canonical: "/product",
  },
};

const Product = () => {
  return (
    <MainContentsWrapper>
      <Heading as="h1">Product</Heading>
      <Text variant="normal">プロダクト一覧を掲載します。</Text>
    </MainContentsWrapper>
  );
};

export default Product;
