import { Flex, Stack } from "@chakra-ui/react";
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
      <Header />

      <Flex justifyContent="center" flexDirection="row-reverse">
        <Stack as="main" mt="75px" spacing="40px">
          <Container pt={{ base: "32px", md: "47px" }} px={{ base: "20px", md: "40px" }}>
            {children}
          </Container>
          <Footer />
        </Stack>
        <Sidebar />
      </Flex>
    </>
  );
};
