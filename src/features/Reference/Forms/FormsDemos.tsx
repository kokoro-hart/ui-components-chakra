import { Box, ChakraProps, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { getPath } from "@/utils";

import { ViewSourceArea } from "../ViewSourceArea";

import { LoginForm } from "./LoginForm";

export const FormsDemos: FC<ChakraProps> = ({ ...props }) => {
  return (
    <Stack spacing={{ base: "64px", md: "84px" }} {...props}>
      <Box as="section">
        <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
          📝 ログインフォーム
        </Heading>
        <Box
          mt={{ base: "20px", md: "28px" }}
          p="20px"
          borderRadius="8px"
          border="1px solid"
          borderColor="gray.200"
        >
          <LoginForm />
        </Box>
        <ViewSourceArea
          mt={{ base: "20px", md: "24px" }}
          react={getPath.cases("forms")}
          design={getPath.cases("forms")}
        />
      </Box>
    </Stack>
  );
};
