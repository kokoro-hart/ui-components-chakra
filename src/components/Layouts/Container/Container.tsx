import { As, Box, ChakraProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = ChakraProps & {
  children: ReactNode;
  as?: As;
};

export const Container: FC<Props> = ({ children, as, ...props }) => {
  return (
    <Box as={as} w="100%" maxW="960px" {...props}>
      {children}
    </Box>
  );
};
