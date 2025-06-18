import type { Metadata } from "next";
import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Heading } from "@/app/_components/elements/heading";
import { Text } from "@/app/_components/elements/text";

export const metadata: Metadata = {
  title: "Mogy Portfolio | Contact",
  description: "モギー（Mogy）へのお問い合わせページです。",
  alternates: {
    canonical: "/contact",
  },
};

const Contact = () => {
  return (
    <MainContentsWrapper>
      <Heading as="h1">Contact</Heading>
      <Text variant="normal">お問い合わせはこちらから。</Text>
    </MainContentsWrapper>
  );
};

export default Contact;
