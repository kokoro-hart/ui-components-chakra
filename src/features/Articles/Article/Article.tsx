import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Link } from "@/components/Elements/Link";

type Props = {
  id: string;
  titleJa: string;
  titleEn: string;
  thumbnail: {
    src: string;
  };
};

export const Article: FC<Props> = ({ id, titleJa, titleEn, thumbnail }) => {
  return (
    <Box
      as="article"
      borderRadius="8px"
      border="1px solid"
      borderColor="border.200"
      overflow="hidden"
      _hover={{
        boxShadow: "md",
        transition: "0.3s",
      }}
    >
      <Link href={id}>
        <Box aspectRatio={4 / 3} overflow="hidden" bg="background.300">
          <Image
            w="100%"
            h="auto"
            src={thumbnail.src}
            alt={titleJa}
            loading="lazy"
            htmlWidth="250"
            htmlHeight="188"
            objectFit="cover"
          />
        </Box>

        <Box p="12px 10px" bg="background.100">
          <Heading as="h3" fontWeight={700} fontSize={{ base: "12px", md: "14px" }}>
            {titleJa}
          </Heading>
          <Text fontSize={{ base: "10px", md: "12px" }} color="gray.500" fontWeight={400} mt="4px">
            {titleEn}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
