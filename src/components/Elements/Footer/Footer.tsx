import { Box, ChakraProps } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC<ChakraProps> = ({ ...props }) => {
  return (
    <Box h="40px" as="footer" textAlign="center" {...props}>
      © cocosyu 2023
    </Box>
  );
};
