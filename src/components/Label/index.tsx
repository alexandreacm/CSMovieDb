import React from "react";
import { StyledText } from "./styles";

type Props = {
  fontSize?: number | undefined;
  children: React.ReactNode;
};

export function Label({ fontSize, children }: Props) {
  return <StyledText fontSize={fontSize}>{children}</StyledText>;
}
