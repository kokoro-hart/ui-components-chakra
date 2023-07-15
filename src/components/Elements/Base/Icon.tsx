import { Icon as ChakraIcon, IconProps as ChakraIconProps, As } from "@chakra-ui/react";

export type IconProps = Omit<ChakraIconProps, "css"> & {
  as?: As;
};

export const Icon = ({ children, ...props }: IconProps) => (
  <ChakraIcon {...props}>{children}</ChakraIcon>
);

Icon.displayName = "Icon";
