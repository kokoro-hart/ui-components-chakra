import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

import { getPath } from "@/utils";

type Props = {
  slug: string;
  title: string;
  thumbnail: {
    src: string;
  };
};

export const Card: FC<Props> = ({ slug, title, thumbnail }) => {
  return (
    <Box
      as="article"
      borderRadius="8px"
      border="1px solid"
      borderColor="border.200"
      overflow="hidden"
      w="100%"
      h="100%"
      bg="background.100"
      _hover={{
        boxShadow: "md",
        transition: "0.3s",
      }}
    >
      <Link
        as={NextLink}
        href={getPath.demos(slug)}
        display="block"
        h="100%"
        _hover={{ textDecoration: "none" }}
      >
        <Box aspectRatio={4 / 3} overflow="hidden" bg="background.300">
          <Image
            w="100%"
            h="auto"
            src={thumbnail.src}
            alt={`${slug} image`}
            loading="lazy"
            htmlWidth="250"
            htmlHeight="188"
            objectFit="cover"
          />
        </Box>

        <Box p="12px 10px">
          <Heading as="h3" fontWeight={700} fontSize={{ base: "12px", md: "14px" }}>
            {title}
          </Heading>
          <Text fontSize={{ base: "10px", md: "12px" }} color="gray.500" fontWeight={400} mt="4px">
            {slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
