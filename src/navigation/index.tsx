import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app.navigator";

const Navigation = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
