import type { Metadata } from "next";
import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Heading } from "@/app/_components/elements/heading";
import { Text } from "@/app/_components/elements/text";

export const metadata: Metadata = {
  title: "Mogy Portfolio | Skill",
  description: "モギー（Mogy）のスキルセットを紹介するページです。",
  alternates: {
    canonical: "/skill",
  },
};

const Skill = () => {
  return (
    <MainContentsWrapper>
      <Heading as="h1">Skill</Heading>
      <Text variant="normal">スキルセットの情報を掲載します。</Text>
    </MainContentsWrapper>
  );
};

export default Skill;
