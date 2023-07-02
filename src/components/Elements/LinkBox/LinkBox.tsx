import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  LinkBox as ChakraLinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

import { Contents } from "@/features/Reference/types";

type LinkBoxProps = {
  content: Contents;
};

export const LinkBox: FC<LinkBoxProps> = ({ content }) => {
  const getFavicon = (url: string) => `https://www.google.com/s2/favicons?domain=${url}`;

  const formatDate = (updateAt: string) => {
    const date = new Date(updateAt);
    const formattedDate = date
      .toLocaleDateString("ja", { year: "numeric", month: "2-digit", day: "2-digit" })
      .replace(/\//g, ".");

    return formattedDate;
  };

  return (
    <ChakraLinkBox
      as="article"
      display="flex"
      gap={{ base: "10px", md: "24px" }}
      borderWidth="1px"
      rounded="md"
      bg="background.100"
      p="0"
      transition={{ md: "background .6s cubic-bezier(0.22, 1, 0.36, 1)" }}
      _hover={{ md: { bg: "background.200" } }}
    >
      <Stack
        w={{ base: "calc(100% - 120px - 10px)", md: "calc(100% - 230px - 24px)" }}
        p={{ base: "3", md: "5" }}
        spacing={{ base: "10px", md: "16px" }}
        justifyContent="space-between"
      >
        <Stack spacing={{ base: "2px", md: "0" }}>
          <Heading
            size="md"
            my={{ base: "0", md: "2" }}
            noOfLines={{ base: 2, md: 1 }}
            fontSize={{ base: "14px", md: "16px" }}
          >
            <LinkOverlay href={content["og:url"]} target="_blank" _before={{ zIndex: "1" }}>
              {content["og:title"]}
            </LinkOverlay>
          </Heading>
          <Text noOfLines={1} fontSize={{ base: "12px", md: "14px" }} color="gray.600">
            {content["og:description"]}
          </Text>
        </Stack>
        <Flex gap="10px" alignItems="center">
          <Image
            boxSize={{ base: "12px", md: "14px" }}
            src={getFavicon(content["og:url"])}
            alt={`favicon ${content["og:title"]}`}
            loading="lazy"
            htmlWidth="14"
            htmlHeight="14"
          />
          <Text noOfLines={1} fontSize="10px">
            {content["og:site_name"]}
          </Text>
          <Box as="time" dateTime={content["og:updated_time"]} noOfLines={1} fontSize="10px">
            {formatDate(content["og:updated_time"])}
          </Box>
        </Flex>
      </Stack>
      <AspectRatio w="100%" maxW={{ base: "120px", md: "230px" }} ratio={16 / 9}>
        <Image
          w="100%"
          h="auto"
          src={content["og:image"]}
          alt={`ogp ${content["og:title"]}`}
          loading="lazy"
          htmlWidth="230"
          htmlHeight="141"
          objectFit="cover"
        />
      </AspectRatio>
    </ChakraLinkBox>
  );
};
