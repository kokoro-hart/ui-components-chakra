import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { Footer } from "@/components/Elements/Footer";
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
      <Box as="main" mt="75px" pb={{ base: "84px", md: "134px" }}>
        <Fv {...fv} />
        {children}
      </Box>
      <Footer />
    </>
  );
};
