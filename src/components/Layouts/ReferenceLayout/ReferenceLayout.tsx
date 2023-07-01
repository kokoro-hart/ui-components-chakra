import { FC, ReactNode } from "react";

import { Header } from "@/components/Elements/Header";
import { Fv } from "@/features/Reference/Fv";
import type { FvProps } from "@/features/Reference/Fv";

type Props = {
  fv: FvProps;
  children: ReactNode;
};

export const ReferenceLayout: FC<Props> = ({ children, fv }) => {
  return (
    <>
      <Header />
      <Fv {...fv} />
      {children}
    </>
  );
};
