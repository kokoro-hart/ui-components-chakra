import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = Omit<ChakraInputProps, "size"> & {
  size?: "sm" | "md";
  registration?: Partial<UseFormRegisterReturn>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, size = "sm", registration, ...props }, ref) => {
    return (
      <ChakraInput
        size={size}
        px={size === "sm" ? 3 : 4}
        bgColor={"white"}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "outline" }}
        ref={ref}
        {...registration}
        {...props}
      >
        {children}
      </ChakraInput>
    );
  },
);

Input.displayName = "Input";
