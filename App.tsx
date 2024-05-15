import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { useGoogleFonts } from "./src/hooks/useGoogleFonts";
import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded, fontError] = useGoogleFonts();

  if (!fontsLoaded && !fontError) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2eded",
    alignItems: "center",
  },
});
