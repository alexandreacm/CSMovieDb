import React from "react";
import { StatusBar } from "react-native";
import { useGoogleFonts } from "./src/hooks/useGoogleFonts";
import Home from "./src/screens/Home";
import SafeAreaView from "./src/components/SafeAreaView";

export default function App() {
  const [fontsLoaded, fontError] = useGoogleFonts();

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <Home />
    </SafeAreaView>
  );
}
