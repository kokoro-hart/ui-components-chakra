import { Box, ChakraProps, Grid, Heading, Stack } from "@chakra-ui/react";
import { FC, useReducer } from "react";

import { VideoModalProps } from "../VideoModal";
import { VideoModal } from "../VideoModal";
import { VideoModalTrigger } from "../VideoModalTrigger";

type State = Omit<VideoModalProps, "onClose">;

type Action = Omit<State, "isOpen"> & {
  type: "OPEN_MODAL" | "CLOSE_MODAL";
};

const initialState: State = {
  isOpen: false,
  heading: "",
  videoSrc: "",
  linkSrc: "",
  size: "md",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        heading: action.heading,
        videoSrc: action.videoSrc,
        linkSrc: action.linkSrc,
        size: action.size,
      };
    case "CLOSE_MODAL":
      return initialState;
    default:
      return state;
  }
};

export const AccordionCases: FC<ChakraProps> = ({ ...props }) => {
  const cases = {
    goodpatch: {
      heading: "Goodpatch Inc.",
      video: "https://i.gyazo.com/e26fece217b714de75ab8247e07557a1.mp4",
      site: "https://goodpatch.com/",
    },
    richka: {
      heading: "RICHKA Inc.",
      video: "https://i.gyazo.com/f8a3267452e50ea35f054ec18159d4ce.mp4",
      site: "https://richka.co.jp/",
    },
    zozo: {
      heading: "zozotown",
      video: "https://i.gyazo.com/b67ebe9ad211ccdfafba753b31cf52b7.mp4",
      site: "https://zozo.jp/_help/default.html?p_no=1",
    },
  };

  const { goodpatch, richka, zozo } = cases;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenModal = (
    heading: string,
    videoSrc: string,
    linkSrc: string,
    size: State["size"] = "md",
  ) => {
    dispatch({ type: "OPEN_MODAL", heading, videoSrc, linkSrc, size });
  };

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <VideoModal
        isOpen={state.isOpen}
        onClose={handleCloseModal}
        heading={state.heading}
        videoSrc={state.videoSrc}
        linkSrc={state.linkSrc}
        size={state.size}
      />
      <Stack spacing={{ base: "48px", md: "84px" }} {...props}>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 複数のアイテムを一度に展開できるパターン
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)" }}
            w={{ base: "100%", md: "70%" }}
            gap={{ base: 4, md: 6 }}
            mt={{ base: "24px", md: "32px" }}
          >
            <VideoModalTrigger
              heading={goodpatch.heading}
              videoSrc={goodpatch.video}
              onClick={() => handleOpenModal(goodpatch.heading, goodpatch.video, goodpatch.site)}
            />
            <VideoModalTrigger
              heading={richka.heading}
              videoSrc={richka.video}
              onClick={() => handleOpenModal(richka.heading, richka.video, richka.site)}
            />
          </Grid>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize={{ base: "18px", md: "20px" }}>
            📝 トグルで切り替わるパターン
          </Heading>

          <VideoModalTrigger
            w="100%"
            mt={{ base: "24px", md: "32px" }}
            heading={zozo.heading}
            videoSrc={zozo.video}
            onClick={() => handleOpenModal(zozo.heading, zozo.video, zozo.site, "5xl")}
          />
        </Box>
      </Stack>
    </>
  );
};
