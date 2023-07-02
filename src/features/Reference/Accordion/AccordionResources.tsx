import { Box, ChakraProps, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { LinkBox } from "@/components/Elements/LinkBox";

import { MetaData } from "../types";

type Props = ChakraProps & {
  metaData: MetaData[];
};

export const AccordionResources: FC<Props> = ({ metaData, ...props }) => {
  return (
    <Stack spacing={{ base: "48px", md: "84px" }} {...props}>
      {metaData.map(({ title, contents }) => (
        <Box as="section" key={title}>
          <Heading as="h2" fontSize={{ base: "20px", md: "24px" }}>
            {title}
          </Heading>
          <List mt={{ base: "22px", md: "28px" }} spacing={{ base: "16px", md: "22px" }}>
            {contents.map((content) => (
              <ListItem key={content["og:title"]}>
                <LinkBox content={content} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Stack>
  );
};
