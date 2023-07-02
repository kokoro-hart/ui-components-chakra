import { Box, ChakraProps, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import { FC } from "react";

import { MetaData } from "../types";

type Props = ChakraProps & {
  metaData: MetaData[];
};

export const AccordionResources: FC<Props> = ({ metaData, ...props }) => {
  console.log(metaData);

  return (
    <Stack spacing={{ base: "48px", md: "84px" }} {...props}>
      {metaData.map(({ title, contents }) => (
        <Box as="section" key={title}>
          <Heading as="h2" fontSize={{ base: "20px", md: "24px" }}>
            {title}
          </Heading>
          <List>
            {contents.map((content) => (
              <ListItem key={content["og:title"]}>{content["og:title"]}</ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Stack>
  );
};
