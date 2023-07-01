import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Header } from "@/components/Elements/Header";

import { Container } from "../Container";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <Box as="main">
        <Container mt={{ base: "32px", md: "47px" }}>{children}</Container>
      </Box>
    </>
  );
}
