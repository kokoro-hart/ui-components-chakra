import { Box, ChakraProps, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { Accordion } from "@/features/Accordion/components";
import { ViewSourceArea } from "@/features/Reference/components/ViewSourceArea";
import { getPath } from "@/utils";

export const AccordionDemos: FC<ChakraProps> = ({ ...props }) => {
  return (
    <>
      <Stack spacing={{ base: "64px", md: "84px" }} {...props}>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 複数のアイテムを一度に展開する
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
          <ViewSourceArea
            mt={{ base: "20px", md: "24px" }}
            react={getPath.cases("accordion")}
            vanilla={getPath.cases("accordion")}
            design={getPath.cases("accordion")}
          />
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 トグルで切り替える
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
          <ViewSourceArea
            mt={{ base: "20px", md: "24px" }}
            react={getPath.cases("accordion")}
            vanilla={getPath.cases("accordion")}
            design={getPath.cases("accordion")}
          />
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 はじめに1つ開いておく
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
          <ViewSourceArea
            mt={{ base: "20px", md: "24px" }}
            react={getPath.cases("accordion")}
            vanilla={getPath.cases("accordion")}
          />
        </Box>
      </Stack>
    </>
  );
};
