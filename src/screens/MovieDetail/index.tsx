import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useGetMovieByIdQuery } from "../../services/api-movie";
import { Loading } from "../../components/Loading";
import {
  StyledScrollView,
  StyledImage,
  StyledContainer,
  StyledText,
  StyledOverview,
  StyledTitle,
} from "./styles";
import { Label } from "../../components/Label";
import { useTheme } from "styled-components/native";
import Genre from "../../components/Genre";
import { View } from "react-native";
import StarRating from "../../components/StarRating";

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledScrollView>
          <StyledImage source={{ uri: data?.Poster }} />

          <StyledTitle>
            {data?.Title} - ({data?.Year})
          </StyledTitle>

          <Genre genre={data?.Genre} />

          <StarRating average={data?.imdbRating} />

          <Label fontSize={18} isBold style={{ marginTop: 10, padding: 8 }}>
            Overview:
          </Label>
          <StyledOverview>{data?.Plot}</StyledOverview>

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
          <StyledContainer>
            <Label style={{ marginRight: 10 }} fontSize={15} isBold>
              Language:
            </Label>
            <StyledText>{data?.Language}</StyledText>
          </StyledContainer>
          <StyledContainer />
        </StyledScrollView>
      )}
    </>
  );
}
