import React from "react";
import { StyledSafeAreaView } from "./styles";

type Props = {
  children: React.ReactNode;
};
export default function SafeAreaView({ children }: Props) {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
}
