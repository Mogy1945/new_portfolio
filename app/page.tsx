import type { Metadata } from "next";
import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Text } from "@/app/_components/elements/text";
import { Heading } from "@/app/_components/elements/heading";
import { LinkBannerWrapper } from "@/app/(home)/_components";

export const metadata: Metadata = {
  title: "Mogy Portfolio | Home",
  description:
    "モギー（Mogy）のポートフォリオ（Portfolio）のトップ（TOP）ページです。",
  alternates: {
    canonical: "/",
  },
};

const Home = () => {
  return (
    <MainContentsWrapper>
      <main className="flex flex-col items-center justify-center bg-[#e0f7ff]">
        <div className="mb-5">
          <Heading as="h1">Mogy Portfolio</Heading>
        </div>

        <div className="mb-10">
          <Text variant="normal">ひとこと：ポートフォリオ、はじめました。</Text>
        </div>

        <div className="flex flex-col gap-5 w-full items-center">
          <LinkBannerWrapper
            href="/profile"
            iconLink="/images/home/profile.png"
            iconAlt="経歴を表す画像"
            title="PROFILE"
            description="経歴とプロフィール"
          />
          <LinkBannerWrapper
            href="/skill"
            iconLink="/images/home/skill.png"
            iconAlt="スキルを表す画像"
            title="SKILL"
            description="スキルセット一覧"
          />
          <LinkBannerWrapper
            href="/product"
            iconLink="/images/home/product.png"
            iconAlt="商品を表す画像"
            title="PRODUCT"
            description="商品一覧"
          />
          <LinkBannerWrapper
            href="/contact"
            iconLink="/images/home/contact.png"
            iconAlt="お問い合わせを表す画像"
            title="CONTACT"
            description="お問い合わせ"
          />
        </div>
      </main>
    </MainContentsWrapper>
  );
};

export default Home;
