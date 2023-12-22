import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { ReactNode } from "react";

const NotoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={clsx(`bg-[#e0f7ff]`, NotoSansJp.className)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
