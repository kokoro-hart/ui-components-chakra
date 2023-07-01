import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Container } from "@/components/Layouts/Container";

export const Header: FC = () => {
  return (
    <Box as="header" bg="background.100" h="75px">
      <Container h="100%" display="flex" alignItems="center" gap="8px">
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
          UI Memo
        </Text>
      </Container>
    </Box>
  );
};
