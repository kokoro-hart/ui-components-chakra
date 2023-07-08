import { Box, ChakraProps, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { Accordion } from "@/features/Reference/Accordion";

export const AccordionDemos: FC<ChakraProps> = ({ ...props }) => {
  return (
    <>
      <Stack spacing={{ base: "48px", md: "84px" }} {...props}>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 複数のアイテムを一度に展開できるパターン
          </Heading>
          <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
            <Accordion allowMultiple />
          </Box>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 トグルで切り替わるパターン
          </Heading>
          <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
            <Accordion allowToggle />
          </Box>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 はじめに1つ開いておくパターン
          </Heading>
          <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
            <Accordion allowToggle defaultIndex={[0]} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
