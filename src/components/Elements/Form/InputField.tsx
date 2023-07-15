import { As, StyleProps } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { InputGroup, InputProps } from "../Base";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

export type InputFieldProps = FieldWrapperPassThroughProps &
  InputProps & {
    type?: "text" | "email" | "password" | "number";
    size?: "md" | "sm";
    placeholder?: string;
    registration: Partial<UseFormRegisterReturn>;
    icon?: As | undefined;
    iconColor?: string;
  } & StyleProps;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const {
    type = "text",
    size = "sm",
    label,
    labelColor,
    labelSize,
    placeholder = "",
    registration,
    error,
    icon,
    iconColor,
    isRequired,
    warningMessage,
    ...inputProps
  } = props;
  return (
    <FieldWrapper
      label={label}
      labelColor={labelColor}
      labelSize={labelSize}
      error={error}
      isRequired={isRequired}
      warningMessage={warningMessage}
    >
      <InputGroup
        icon={icon}
        iconColor={iconColor}
        type={type}
        size={size}
        placeholder={placeholder}
        registration={registration}
        {...inputProps}
        ref={ref}
      />
    </FieldWrapper>
  );
});
InputField.displayName = "InputField";
