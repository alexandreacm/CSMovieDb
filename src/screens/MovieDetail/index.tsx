import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useGetMovieByIdQuery } from "../../services/api-movie";
import { Loading } from "../../components/Loading";
import {
  StyledWrapper,
  StyledImage,
  StyledContainer,
  StyledText,
} from "./styles";
import { Label } from "../../components/Label";
import { useTheme } from "styled-components/native";

type Props = NativeStackHeaderProps & {
  route: {
    params: {
      id: string;
    };
  };
};

export default function MovieDetail({ route }: Props) {
  const id = route.params.id;
  const { data, isLoading, error } = useGetMovieByIdQuery(id);
  const { COLORS } = useTheme();

  return (
    <StyledWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledImage source={{ uri: data?.Poster }} />

          <Label fontSize={20} isBold style={{ marginTop: 10, padding: 8 }}>
            {data?.Title} - {data?.Year}
          </Label>

          <StyledContainer>
            <Label style={{ marginRight: 10 }} fontSize={15} isBold>
              Director:
            </Label>
            <Label fontSize={15} color={COLORS.text.TITLE}>
              {data?.Director}
            </Label>
          </StyledContainer>
          <StyledContainer>
            <Label style={{ marginRight: 10 }} fontSize={15} isBold>
              Writer:
            </Label>
            <StyledText>{data?.Writer}</StyledText>
          </StyledContainer>
          <StyledContainer>
            <Label style={{ marginRight: 10 }} fontSize={15} isBold>
              Actors:
            </Label>
            <StyledText>{data?.Actors}</StyledText>
          </StyledContainer>
        </>
      )}
    </StyledWrapper>
  );
}
