import React from "react";
import { StyleProp, TextStyle } from "react-native";

import { StyledText } from "./styles";

type Props = {
  fontSize?: number | undefined;
  color?: string | undefined;
  children: React.ReactNode;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
};

export function Label({
  color,
  fontSize,
  children,
  isBold,
  style,
  ...props
}: Props) {
  return (
    <StyledText
      {...props}
      isBold={isBold}
      style={style}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </StyledText>
  );
}
