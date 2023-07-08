import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { Footer } from "@/components/Elements/Footer";
import { Header } from "@/components/Elements/Header";
import { Fv } from "@/features/Reference/Fv";
import type { FvProps } from "@/features/Reference/Fv";

import { Container } from "../Container";
import { Head, HeadProps } from "../Head";
import { Sidebar } from "../Sidebar";

type Props = {
  fv: FvProps;
  children: ReactNode;
  head: HeadProps;
};

export const ReferenceLayout: FC<Props> = ({ children, fv, head }) => {
  return (
    <>
      <Head {...head} />
      <Header />
      <Flex justifyContent="center">
        <Sidebar />
        <Container as="main" pb={{ base: "84px", md: "134px" }} bg="background.100" mt="75px">
          <Fv {...fv} />
          <Box px={{ base: "20px", md: "40px" }} mt={{ base: "32px", md: "40px" }}>
            {children}
          </Box>
        </Container>
      </Flex>
      <Footer />
    </>
  );
};
