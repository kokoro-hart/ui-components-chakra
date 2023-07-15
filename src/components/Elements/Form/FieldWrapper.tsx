import { Box, FormControl, FormErrorMessage, FormLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label?: string;
  labelColor?: string;
  labelSize?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  disabled?: boolean;
  isRequired?: boolean;
  description?: string;
  warningMessage?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, "className" | "children">;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const {
    label,
    labelColor = "text.600",
    labelSize = "12px",
    children,
    error,
    disabled,
    isRequired,
    warningMessage,
  } = props;
  return (
    <FormControl isInvalid={!!error?.message}>
      <FormLabel
        mr={0}
        mb={0}
        color={labelColor}
        fontSize={labelSize}
        fontWeight={400}
        className={disabled ? "disabled" : ""}
      >
        {label}
        {isRequired && (
          <Text as={"span"} color={"red.600"} fontSize={labelSize} fontWeight={600}>
            *&nbsp;{warningMessage}
          </Text>
        )}
        <Box mt={label ? 1 : 0}>{children}</Box>
      </FormLabel>

      {error?.message && (
        <FormErrorMessage role={"alert"} mt={1} fontSize={labelSize}>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
