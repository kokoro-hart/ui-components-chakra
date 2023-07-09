import { Box, ChakraProps, Heading, VisuallyHidden } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FC } from "react";

type VideoModalTriggerProps = ChakraProps & {
  heading: string;
  videoSrc: string;
  onClick: () => void;
};

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

export const VideoModalTrigger: FC<VideoModalTriggerProps> = ({
  heading,
  videoSrc,
  onClick,
  ...props
}) => {
  return (
    <Box onClick={onClick} css={wrapper} {...props}>
      <Box borderRadius={{ base: "8px", md: "12px" }} overflow="hidden" css={inner}>
        <video autoPlay muted loop preload="metadata" src={videoSrc} />
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
  );
};
