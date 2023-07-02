import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";

export type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  videoSrc?: string;
  linkSrc?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
};

export const VideoModal: FC<VideoModalProps> = ({
  isOpen,
  onClose,
  heading,
  videoSrc,
  linkSrc,
  size = "md",
}) => {
  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        {heading && <ModalHeader>{heading}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>
          <video autoPlay muted loop preload="metadata" src={videoSrc} />
        </ModalBody>

        <ModalFooter>
          <Button bg="primary.300" color="background.100" mr={3} onClick={onClose}>
            閉じる
          </Button>
          <Link
            href={linkSrc}
            target="_blank"
            fontSize={{ base: "12px", md: "14px" }}
            fontWeight={700}
          >
            サイトを見る
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
