import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainContentsWrapper = ({ children }: Props) => {
  return (
    <div className="mx-auto flex w-full flex-col py-10 px-4">{children}</div>
  );
};
