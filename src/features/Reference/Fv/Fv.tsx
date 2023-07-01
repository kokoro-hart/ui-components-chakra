import { Box, Heading, Image, Stack, List, ListItem } from "@chakra-ui/react";
import { FC } from "react";

import { Container } from "@/components/Layouts/Container";

export type FvProps = {
  thumbnail: {
    src: string;
  };
  title: string;
  role: string;
  impetus: string;
};

export const Fv: FC<FvProps> = ({ thumbnail, title, role, impetus }) => {
  return (
    <Box py="56px" bg="background.300">
      <Container>
        <Stack alignItems="center">
          <Image
            w="40%"
            h="auto"
            src={thumbnail.src}
            alt={`${title} image`}
            loading="lazy"
            htmlWidth="250"
            htmlHeight="188"
            objectFit="cover"
          />
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }}>
            {title}
          </Heading>
          <Stack mt="12px">
            <List as="dl" spacing={3}>
              <ListItem as="div" display="flex" alignItems="center" gap="17px">
                <Box
                  as="dt"
                  w={{ base: "100px", md: "128px" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py="4px"
                  borderRadius="4px"
                  bg="primary.300"
                  color="background.100"
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={700}
                >
                  UIの役割
                </Box>
                <Box
                  as="dd"
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={700}
                  w={{ base: "calc(100% - 17px - 100px)", md: "calc(100% - 17px - 128px)" }}
                >
                  {role}
                </Box>
              </ListItem>
              <ListItem as="div" display="flex" gap="17px" alignItems="center">
                <Box
                  as="dt"
                  w={{ base: "100px", md: "128px" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  py="4px"
                  borderRadius="4px"
                  bg="primary.300"
                  color="background.100"
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={700}
                >
                  タイミング
                </Box>
                <Box
                  as="dd"
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={700}
                  w={{ base: "calc(100% - 17px - 100px)", md: "calc(100% - 17px - 128px)" }}
                >
                  {impetus}
                </Box>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
