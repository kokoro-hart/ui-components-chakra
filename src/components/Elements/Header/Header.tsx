import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { getPath } from "@/utils";

import { Link } from "../Link";

export const Header: FC = () => {
  return (
    <Box as="header" bg="hsla(0,0%,100%,.5)" h="75px" position="fixed" top="0" w="100%" zIndex="10">
      <Container h="100%" display="flex" alignItems="center" maxW="1200px">
        <Link href={getPath.home}>
          <Flex gap="8px" alignItems="center">
            <Image
              boxSize={{ base: "32px", md: "40px" }}
              src="/image/kokoro-tobita-icon.png"
              alt="Dan Abramov"
              border="1px solid"
              borderColor="border.100"
              borderRadius="full"
              htmlWidth="32"
              htmlHeight="32"
            />
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={700}>
              Develop Memo
            </Text>
          </Flex>
        </Link>
      </Container>
    </Box>
  );
};
