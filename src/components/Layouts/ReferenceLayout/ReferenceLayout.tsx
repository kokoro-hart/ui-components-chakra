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
        <Box as="main" mt="75px" pb={{ base: "84px", md: "134px" }} bg="background.100">
          <Fv {...fv} />
          <Container mt={{ base: "32px", md: "40px" }}>{children}</Container>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
