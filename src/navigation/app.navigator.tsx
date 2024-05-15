import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailMovie from "../screens/DetailMovie";
import { useTheme } from "styled-components/native";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const theme = useTheme();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header />,
            title: "",
          }}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovie}
          options={{
            header: () => <Header isVisibleBackButton />,
            title: "",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
