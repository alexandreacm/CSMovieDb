import React from "react";
import {
  TouchableOpacity,
  FlatList,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Label } from "../../components/Label";
import {
  WrapperButtons,
  WrapperFilter,
  WrapperViewGrid,
  StyledHomeContainer,
  StyledRoundedView,
  StyledWrapperError,
} from "./styles";
import theme from "../../styles/theme/default-theme";
import { useGetMoviesQuery } from "../../services/api-movie";
import { IMovie } from "../../models";
import { Loading } from "../../components/Loading";

type NavigationProps = NativeStackHeaderProps & {};

export default function Home({ navigation }: NavigationProps) {
  const { data = [], isError, isLoading, error } = useGetMoviesQuery();

  const renderItem = ({ item }: { item: IMovie }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailMovie", { id: item?.imdbID });
        }}
      >
        <View
          key={String(item?.imdbID)}
          style={[styles.card, styles.shadowProp]}
        >
          <Image style={styles.img} source={{ uri: item?.Poster }} />
          <Label fontSize={14} isBold style={{ marginTop: 10 }}>
            {item?.Title}
          </Label>
          <Label fontSize={14}>{item?.Year}</Label>
        </View>
      </TouchableOpacity>
    );
  };

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
          <MaterialCommunityIcons
            name="dots-grid"
            size={30}
            color="black"
            style={{ marginRight: 15 }}
          />
          <Octicons name="three-bars" size={26} color="black" />
        </WrapperViewGrid>
      </WrapperButtons>

      {isLoading && <Loading />}
      {isError && (
        <StyledWrapperError>
          <Label fontSize={20}>
            {error?.error || "Newwork request failed"}
          </Label>
        </StyledWrapperError>
      )}

      {data && !isLoading && (
        <FlatList
          testID="flatList"
          data={data?.Search}
          numColumns={2}
          keyExtractor={(item: IMovie) => item.imdbID}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </StyledHomeContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 175,
    height: 340,
    padding: 8,
    backgroundColor: theme.COLORS.text.WHITE,
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 6,
  },
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
  img: {
    width: "100%",
    height: 260,
  },
});
