import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { Accordion } from "@/features/Reference/Accordion";

export const AccordionDemos = () => {
  return (
    <>
      <Box as="section" mt={{ base: "32px", md: "40px" }}>
        <Heading as="h2" fontSize={{ base: "20px", md: "24px" }}>
          Multiple Accordion
        </Heading>
        <Text mt={{ base: "8px", md: "12px" }} fontWeight={700}>
          📝 複数のアイテムを一度に展開できるパターン
        </Text>
        <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
          <Accordion allowMultiple />
        </Box>
      </Box>
      <Box as="section" mt={{ base: "32px", md: "40px" }}>
        <Heading as="h2" fontSize={{ base: "20px", md: "24px" }}>
          Toggle Accordion
        </Heading>
        <Text mt={{ base: "8px", md: "12px" }} fontWeight={700}>
          📝 トグルで切り替わるパターン
        </Text>
        <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
          <Accordion allowToggle />
        </Box>
      </Box>
      <Box as="section" mt={{ base: "32px", md: "40px" }}>
        <Heading as="h2" fontSize={{ base: "20px", md: "24px" }}>
          Default Open
        </Heading>
        <Text mt={{ base: "8px", md: "12px" }} fontWeight={700}>
          📝 はじめに1つ開いておくパターン
        </Text>
        <Box mt={{ base: "20px", md: "28px" }} bg="background.100" p="20px" borderRadius="8px">
          <Accordion allowToggle defaultIndex={[0]} />
        </Box>
      </Box>
    </>
  );
};
