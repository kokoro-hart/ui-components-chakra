import { Flex, SkipNavContent, SkipNavLink } from "@chakra-ui/react";
import { ReactNode, FC } from "react";

import { Footer } from "@/components/Elements/Footer";
import { Header } from "@/components/Elements/Header";
import { Sidebar } from "@/components/Layouts/Sidebar";

import { Container } from "../Container";

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <SkipNavLink>メインコンテンツにスキップ</SkipNavLink>
      <Header />

      <Flex id="__next_content" justifyContent="center" flexDirection="row-reverse">
        <SkipNavContent />
        <Container
          as="main"
          mt="75px"
          pt={{ base: "32px", md: "47px" }}
          px={{ base: "20px", md: "40px" }}
        >
          {children}
          <Footer />
        </Container>
        <Sidebar />
      </Flex>
    </>
  );
};
