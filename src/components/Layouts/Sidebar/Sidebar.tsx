import { Box, ChakraProps, Heading, Hide, Link, List, ListItem, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

import { uis } from "@/data";
import { getPath } from "@/utils";

export const Sidebar: FC<ChakraProps> = ({ ...props }) => {
  return (
    <Hide below="md">
      <Stack
        as="aside"
        minW="230px"
        height="calc(100vh - 160px)"
        position="sticky"
        top="118px"
        overflowY="auto"
        overscrollBehavior="none"
        spacing="40px"
        py="10px"
        px={{ base: "20px", md: "40px" }}
        {...props}
      >
        {uis.map(({ heading, contents }) => (
          <Box as="section" key={heading}>
            <Heading as="h4" fontSize="15px">
              {heading}
            </Heading>
            <List spacing="10px" mt="10px">
              {contents.map(({ slug, title, disable }) => (
                <ListItem key={slug} fontSize="14px" fontWeight={400}>
                  {disable ? (
                    <Box as="span">🚧 {title}</Box>
                  ) : (
                    <Link as={NextLink} href={getPath.demos(slug)}>
                      {title}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Stack>
    </Hide>
  );
};
