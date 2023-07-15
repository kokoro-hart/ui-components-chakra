import { Box, Flex, SkipNavContent, SkipNavLink } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { Header } from "@/components/Elements/Header";
import { Fv, FvProps } from "@/features/Reference";

import { Container } from "../Container";
import { Sidebar } from "../Sidebar";

type Props = {
  fv: FvProps;
  children: ReactNode;
};

export const ReferenceLayout: FC<Props> = ({ children, fv }) => {
  return (
    <>
      <SkipNavLink>メインコンテンツにスキップ</SkipNavLink>
      <Header />
      <Flex id="__next_content" justifyContent="center" flexDirection="row-reverse">
        <SkipNavContent />
        <Container
          as="main"
          pb={{ base: "84px", md: "134px" }}
          bg="background.100"
          mt="75px"
          borderRadius="8px"
        >
          <Fv {...fv} />
          <Box px={{ base: "20px", md: "40px" }} mt={{ base: "32px", md: "40px" }}>
            {children}
          </Box>
        </Container>
        <Sidebar />
      </Flex>
    </>
  );
};
