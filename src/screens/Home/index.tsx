import React from "react";
import { Octicons } from "@expo/vector-icons";
import {} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native";
import { ContainerButtons } from "./styles";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type NavigationProps = NativeStackHeaderProps & {};

export default function Home({ navigation }: NavigationProps) {
  return (
    <>
      <ContainerButtons>
        <Octicons
          name="three-bars"
          size={26}
          color="black"
          style={{ marginRight: 15 }}
        />
        <MaterialCommunityIcons name="dots-grid" size={30} color="black" />
      </ContainerButtons>

      <Button
        title="Navigate"
        onPress={() => navigation.navigate("DetailMovie")}
      />
    </>
  );
}
