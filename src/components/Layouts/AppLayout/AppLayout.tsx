import { ReactNode } from "react";

import { Header } from "@/components/Elements/Header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
