import { Image } from "@/app/_components/elements/image";
import { Text } from "@/app/_components/elements/text";
import { Link } from "@/app/_components/elements/link";

type Props = {
  href: string;
  iconLink: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const LinkBannerWrapper = ({
  href,
  iconLink,
  iconAlt,
  title,
  description,
}: Props) => {
  return (
    <div
      className="
          px-10 py-5 bg-white rounded-md w-full max-w-[500px] shadow
          hover:shadow-lg
        "
    >
      <Link href={href}>
        <div className="flex gap-5">
          <div
            className="
              w-12 h-12
              laptop:h-24 laptop:w-24
            "
          >
            <Image
              src={iconLink}
              alt={iconAlt}
              width={96}
              height={96}
              className="h-full w-full"
            />
          </div>
          <div>
            <Text variant="xl">{title}</Text>
            <Text variant="normal">{description}</Text>
          </div>
        </div>
      </Link>
    </div>
  );
};
