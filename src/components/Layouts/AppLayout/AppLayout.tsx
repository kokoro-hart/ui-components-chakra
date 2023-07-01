import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Footer } from "@/components/Elements/Footer";
import { Header } from "@/components/Elements/Header";

import { Container } from "../Container";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <Box as="main" mt="75px" pb={{ base: "84px", md: "134px" }}>
        <Container pt={{ base: "32px", md: "47px" }}>{children}</Container>
      </Box>
      <Footer />
    </>
  );
}
