import React from "react";
import { StyledContainer, StyledCardGenre } from "./styles";
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
          <StyledCardGenre>
            <Label color={COLORS.text.WHITE} key={idx} fontSize={16}>
              {item}
            </Label>
          </StyledCardGenre>
        );
      })}
    </StyledContainer>
  );
}
