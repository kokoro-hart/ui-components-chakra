import { Box, ChakraProps, Heading, Skeleton, VisuallyHidden } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FC, useReducer, useState } from "react";

import { VideoModal, VideoModalProps } from "./VideoModal";

const inner = css`
  position: relative;
  &:after {
    content: "詳細を見る";
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

const wrapper = css`
  position: relative;
  cursor: pointer;
  button {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:focus-visible {
      box-shadow: var(--chakra-shadows-outline);
    }
  }
`;

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

type VideoModalTriggerProps = ChakraProps & {
  heading: string;
  videoSrc: string;
  siteSrc: string;
  width: number;
  height: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
};

export const VideoModalTrigger: FC<VideoModalTriggerProps> = ({
  heading,
  videoSrc,
  siteSrc,
  size = "md",
  width,
  height,
  ...props
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

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
      <Box
        css={wrapper}
        {...props}
        onClick={() => handleOpenModal(heading, videoSrc, siteSrc, size)}
      >
        <Box borderRadius={{ base: "8px", md: "12px" }} overflow="hidden" css={inner}>
          {isLoading && (
            <Skeleton
              borderRadius={{ base: "8px", md: "12px" }}
              width="100%"
              aspectRatio={width / height}
            />
          )}
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            src={videoSrc}
            width={width}
            height={height}
            onPlaying={() => {
              setIsLoading(false);
            }}
          />
          <Heading
            as="h3"
            mt={{ base: "3px", md: "6px" }}
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight={400}
            textAlign="center"
          >
            {heading}
          </Heading>
        </Box>
        <button type="button">
          <VisuallyHidden>モーダルを開く</VisuallyHidden>
        </button>
      </Box>
    </>
  );
};
