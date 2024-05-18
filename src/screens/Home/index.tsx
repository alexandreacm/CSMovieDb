import React, { useState } from "react";
import { TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Label } from "../../components/Label";
import {
  WrapperButtons,
  WrapperFilter,
  WrapperViewGrid,
  StyledHomeContainer,
  StyledRoundedView,
  StyledWrapperError,
  WrapperSearch,
  StyledInput,
  StyledIcon,
  StyledSearchInput,
  StyledCardColumn,
  StyledCardList,
  StyledViewEmpty,
  StyledImg,
  StyledContainerList,
  TitleList,
} from "./styles";
import theme from "../../styles/theme/default-theme";
import { useGetMovieByTitleQuery } from "../../services/api-movie";
import { IMovie } from "../../models";
import { Loading } from "../../components/Loading";
import { useTheme } from "styled-components/native";

type NavigationProps = NativeStackHeaderProps & {};

export default function Home({ navigation }: NavigationProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [mode, setMode] = useState(2);
  const { COLORS } = useTheme();
  // const {
  //   data = [],
  //   isError,
  //   isLoading,
  //   isFetching,
  //   error,
  // } = useGetMoviesQuery();
  const {
    data = [],
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetMovieByTitleQuery(search);

  const renderItem = ({ item }: { item: IMovie }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MovieDetail", { id: item?.imdbID });
        }}
      >
        {mode == 2 ? (
          <StyledCardColumn
            key={String(item?.imdbID)}
            style={[
              styles.shadowProp,
              { marginVertical: 6, marginHorizontal: 6 },
            ]}
          >
            <StyledImg
              width="100%"
              height={260}
              source={{ uri: item?.Poster }}
            />
            <Label fontSize={14} isBold style={{ marginTop: 10 }}>
              {item?.Title}
            </Label>
            <Label fontSize={14}>{item?.Year}</Label>
          </StyledCardColumn>
        ) : (
          <StyledCardList key={String(item?.imdbID)}>
            <StyledImg
              width="100px"
              height={140}
              source={{ uri: item?.Poster }}
            />
            <StyledContainerList>
              <TitleList>
                <Label fontSize={14} isBold>
                  Title:
                </Label>{" "}
                {item?.Title}
              </TitleList>
              <Label fontSize={14}>
                {" "}
                <Label fontSize={14} isBold>
                  Year:
                </Label>{" "}
                {item?.Year}
              </Label>
            </StyledContainerList>
          </StyledCardList>
        )}
      </TouchableOpacity>
    );
  };

  function handleSearch() {
    setSearch(filter);
    setFilter("");
  }

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (isError) {
    return (
      <StyledWrapperError>
        <Label fontSize={20}>{error?.message}</Label>
      </StyledWrapperError>
    );
  }

  function onViewMode(mode: number) {
    setMode(mode);
  }

  return (
    <StyledHomeContainer>
      <WrapperButtons>
        <WrapperFilter>
          <StyledRoundedView>
            {/* TODO order movies by title, year */}
            <MaterialCommunityIcons
              name="filter-variant"
              size={30}
              color={theme.COLORS.ui.SECONDARY_900}
            />
          </StyledRoundedView>
        </WrapperFilter>
        <WrapperViewGrid>
          <TouchableOpacity onPress={() => onViewMode(2)}>
            <MaterialCommunityIcons
              name="dots-grid"
              size={30}
              color={mode == 2 ? COLORS.ui.PRIMARY_500 : COLORS.ui.PRIMARY}
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onViewMode(1)}>
            <Octicons
              color={mode == 1 ? COLORS.ui.PRIMARY_500 : COLORS.ui.PRIMARY}
              name="three-bars"
              size={26}
            />
          </TouchableOpacity>
        </WrapperViewGrid>
      </WrapperButtons>

      <WrapperSearch>
        <StyledInput>
          <StyledSearchInput
            placeholder="Search Imdb"
            value={filter}
            onChangeText={setFilter}
            onSubmitEditing={handleSearch}
          />
        </StyledInput>
        <StyledIcon>
          <EvilIcons name="search" size={30} color="black" />
        </StyledIcon>
      </WrapperSearch>

      <FlatList
        key={mode}
        testID="flatList"
        data={data?.Search}
        numColumns={mode}
        keyExtractor={(item: IMovie) => item.imdbID}
        renderItem={renderItem}
        ListEmptyComponent={() => {
          return (
            <StyledViewEmpty>
              <Label fontSize={18}>There are no movies that matched.</Label>
            </StyledViewEmpty>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </StyledHomeContainer>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 5,
  },
});
