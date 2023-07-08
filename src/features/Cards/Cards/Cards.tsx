import {
  Grid,
  GridItem,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

import { uis } from "@/data";

import { Card } from "../Card/Card";

export const Cards = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <Slider
        id="slider"
        defaultValue={50}
        min={0}
        max={100}
        colorScheme="teal"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
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
                lg: sliderValue > 50 ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
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
    </>
  );
};
