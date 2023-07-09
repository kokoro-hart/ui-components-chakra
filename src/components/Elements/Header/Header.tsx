import { Box, Button, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";

import { IconHeart } from "@/components/assets";
import { getPath } from "@/utils";

export const Header: FC = () => {
  return (
    <Box as="header" bg="hsla(0,0%,100%,.5)" h="75px" position="fixed" top="0" w="100%" zIndex="10">
      <Container
        h="100%"
        display="flex"
        px={{ base: "20px", md: "40px" }}
        alignItems="center"
        maxW="1308px"
        justifyContent="space-between"
      >
        <Link as={NextLink} href={getPath.home} _hover={{ textDecoration: "none" }}>
          <Flex gap="8px" alignItems="center">
            <Image
              boxSize={{ base: "24px", md: "32px" }}
              src="/image/aice.svg"
              alt=""
              htmlWidth="24"
              htmlHeight="24"
              aria-hidden="true"
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
            <FaGithub size={24} />
          </Link>
          <Button
            leftIcon={<IconHeart />}
            border="1px solid"
            borderColor="gray.200"
            fontSize="14px"
            height={9}
            lineHeight="1"
          >
            応援する
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
