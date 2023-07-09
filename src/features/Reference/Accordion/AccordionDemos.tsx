import { Box, ChakraProps, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import { ButtonPrimary } from "@/components/Elements/ButtonPrimary";
import { LinkMore } from "@/components/Elements/LinkMore";
import { Accordion } from "@/features/Reference/Accordion";
import { getPath } from "@/utils";

export const AccordionDemos: FC<ChakraProps> = ({ ...props }) => {
  return (
    <>
      <Stack spacing={{ base: "48px", md: "84px" }} {...props}>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 複数のアイテムを一度に展開できるパターン
          </Heading>
          <Box
            mt={{ base: "20px", md: "28px" }}
            p="20px"
            borderRadius="8px"
            border="1px solid"
            borderColor="gray.200"
          >
            <Accordion allowMultiple />
          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mt={{ base: "12px", md: "20px" }}
            pr="10px"
          >
            <Flex alignItems="center" gap={3}>
              <ButtonPrimary
                leftIcon={<FaReact color="#61DBFB" size={20} />}
                href={getPath.cases("accordion")}
                as="a"
              >
                View Source
              </ButtonPrimary>
              <ButtonPrimary
                leftIcon={<RiJavascriptFill color="#F0DB4F" size={24} />}
                href={getPath.cases("accordion")}
                as="a"
              >
                View Source
              </ButtonPrimary>
            </Flex>
            <LinkMore href={getPath.cases("accordion")}>デザイン事例を見る</LinkMore>
          </Flex>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 トグルで切り替わるパターン
          </Heading>
          <Box
            mt={{ base: "20px", md: "28px" }}
            p="20px"
            borderRadius="8px"
            border="1px solid"
            borderColor="gray.200"
          >
            <Accordion allowToggle />
          </Box>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 はじめに1つ開いておくパターン
          </Heading>
          <Box
            mt={{ base: "20px", md: "28px" }}
            p="20px"
            borderRadius="8px"
            border="1px solid"
            borderColor="gray.200"
          >
            <Accordion allowToggle defaultIndex={[0]} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
