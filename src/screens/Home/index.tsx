import React from "react";
import { Octicons } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import { Label } from "../../components/Label";
import {
  WrapperButtons,
  WrapperFilter,
  WrapperViewGrid,
  StyledHomeContainer,
  StyledRoundedView,
} from "./styles";
import theme from "../../styles/theme/default-theme";

type NavigationProps = NativeStackHeaderProps & {};

export default function Home({ navigation }: NavigationProps) {
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
    </StyledHomeContainer>
  );
}
