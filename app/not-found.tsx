import { MainContentsWrapper } from "@/app/_components/wrapper/main-contents-wrapper";
import { Heading } from "@/app/_components/elements/heading";
import { Text } from "@/app/_components/elements/text";
import { Link } from "@/app/_components/elements/link";

const NotFound = () => {
  return (
    <MainContentsWrapper>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Heading as="h1">Page Not Found</Heading>
        <Text variant="normal">お探しのページは見つかりませんでした。</Text>
        <Link href="/" className="text-blue-500 underline">
          ホームへ戻る
        </Link>
      </div>
    </MainContentsWrapper>
  );
};

export default NotFound;
