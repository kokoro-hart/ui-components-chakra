import { Box, Button, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

import { getPath } from "@/utils";

export const Header: FC = () => {
  return (
    <Box as="header" bg="hsla(0,0%,100%,.5)" h="75px" position="fixed" top="0" w="100%" zIndex="10">
      <Container
        h="100%"
        display="flex"
        px={{ base: "20px", md: "40px" }}
        alignItems="center"
        maxW="1270px"
        justifyContent="space-between"
      >
        <Link as={NextLink} href={getPath.home} _hover={{ textDecoration: "none" }}>
          <Flex gap="8px" alignItems="center">
            <Image
              boxSize={{ base: "24px", md: "32px" }}
              src="/image/aice.svg"
              alt="Dan Abramov"
              htmlWidth="24"
              htmlHeight="24"
            />
            <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={700}>
              開発者のUIメモ帳
            </Text>
          </Flex>
        </Link>
        <Flex alignItems="center" gap="10px">
          <Link
            href="https://github.com/kokoro-hart/ui-memo-pad"
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Image
              boxSize={{ base: "18px", md: "20px" }}
              src="/image/icon/github.svg"
              alt=""
              htmlWidth="20"
              htmlHeight="20"
            />
          </Link>
          <Button
            as="a"
            href=""
            target="_blank"
            fontSize={{ base: "14px" }}
            p={{ base: "10px" }}
            display="flex"
            gap="5px"
            alignItems="center"
          >
            <Image
              boxSize={{ base: "16px", md: "18px" }}
              src="/image/icon/heart.svg"
              alt=""
              htmlWidth="16"
              htmlHeight="16"
            />
            <Text as="span" ml="4px">
              応援する
            </Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
