import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

import { uis } from "@/data";

import { Card } from "../Card/Card";

export const Cards = () => {
  return (
    <Stack spacing={{ base: "40px", md: "56px" }}>
      {uis.map(({ heading, contents }) => (
        <Stack as="section" key={heading} spacing={{ base: "12px", md: "20px" }}>
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            {heading}
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
          >
            {contents.map((content) => (
              <GridItem key={content.slug}>
                <Card {...content} />
              </GridItem>
            ))}
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
};
