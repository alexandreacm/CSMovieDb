import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { useTheme } from "styled-components/native";
import { StyledWrapper, StyledText } from "./styles";

type Props = {
  average?: string | undefined;
};

const StarRating = ({ average }: Props) => {
  const { COLORS } = useTheme();

  if (!average) {
    return null;
  }

  return (
    <StyledWrapper>
      <Icon testID="starIcon" name="star" color={COLORS.ui.STAR} size={24} />
      <StyledText>{average}/10</StyledText>
    </StyledWrapper>
  );
};

export default StarRating;
