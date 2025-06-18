import type { Metadata } from "next";
import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Heading } from "@/app/_components/elements/heading";
import { Text } from "@/app/_components/elements/text";

export const metadata: Metadata = {
  title: "Mogy Portfolio | Profile",
  description: "モギー（Mogy）のプロフィールページです。",
  alternates: {
    canonical: "/profile",
  },
};

const Profile = () => {
  return (
    <MainContentsWrapper>
      <Heading as="h1">Profile</Heading>
      <Text variant="normal">プロフィールページの内容です。</Text>
    </MainContentsWrapper>
  );
};

export default Profile;
