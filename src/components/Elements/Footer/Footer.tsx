import { Box, ChakraProps } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC<ChakraProps> = ({ ...props }) => {
  return (
    <Box h="75px" as="footer" display="flex" alignItems="center" justifyContent="center" {...props}>
      © cocosyu 2023
    </Box>
  );
};
