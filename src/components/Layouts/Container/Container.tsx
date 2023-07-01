import { ChakraProps, Container as ChakraContainer } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = ChakraProps & {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children, ...props }) => {
  return (
    <ChakraContainer maxW="878px" px={{ base: "20px", md: "40px" }} {...props}>
      {children}
    </ChakraContainer>
  );
};
