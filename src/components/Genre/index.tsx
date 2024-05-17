import React from "react";
import { StyledContainer, StyledRoundedCard } from "./styles";
import { Label } from "../Label";
import { useTheme } from "styled-components/native";

type Props = {
  genre: string | undefined;
};

export default function Genre({ genre }: Props) {
  const genres: string[] | undefined = genre?.split(",");
  const { COLORS } = useTheme();

  return (
    <StyledContainer>
      {genres?.map((item, idx) => {
        return (
          <StyledRoundedCard key={idx + 1}>
            <Label color={COLORS.text.WHITE} fontSize={16}>
              {item}
            </Label>
          </StyledRoundedCard>
        );
      })}
    </StyledContainer>
  );
}
