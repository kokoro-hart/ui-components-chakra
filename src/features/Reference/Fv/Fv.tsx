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
  const dlList = [
    {
      dt: "UIの役割",
      dd: role,
    },
    {
      dt: "タイミング",
      dd: impetus,
    },
  ];
  return (
    <Box pt="16px" pb="56px" bg="background.300" border="1px solid" borderColor="border.100">
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
          <Heading as="h1" fontSize={{ base: "24px", md: "30px" }}>
            {title}
          </Heading>
          <Stack mt="12px">
            <List as="dl" spacing={3}>
              {dlList.map(({ dt, dd }) => (
                <ListItem as="div" display="flex" alignItems="center" gap="17px" key={dt}>
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
                    {dt}
                  </Box>
                  <Box
                    as="dd"
                    fontSize={{ base: "12px", md: "14px" }}
                    fontWeight={700}
                    w={{ base: "calc(100% - 17px - 100px)", md: "calc(100% - 17px - 128px)" }}
                  >
                    {dd}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
