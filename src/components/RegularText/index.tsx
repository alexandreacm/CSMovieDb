import React from "react";
import { Text } from "react-native";
import theme from "../../styles/theme/default-theme";

export function RegularText(props: Text["props"]) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: theme.FONTS.Inter_400_Regular }]}
    />
  );
}
