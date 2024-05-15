import React from "react";
import { StyledContainer, StyledImg } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialIcons";
import icLogo from "../../assets/images/imdb_logo.png";
import { View } from "react-native";

type Props = {
  isVisibleBackButton?: boolean;
};

export default function Header({ isVisibleBackButton = false }: Props) {
  const { goBack } = useNavigation();
  return (
    <StyledContainer>
      <View style={{ flex: 2 }}>
        {isVisibleBackButton && (
          <Icon
            name="arrow-back-ios"
            size={24}
            color="white"
            onPress={() => goBack()}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <StyledImg source={icLogo} resizeMode="cover" />
      </View>
      <View style={{ flex: 2 }}></View>
    </StyledContainer>
  );
}
