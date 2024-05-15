import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate("DetailMovie")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter_900Black",
  },
  text1: {
    fontFamily: "Inter_400Regular",
  },
  text2: {
    fontFamily: "Inter_300Light",
  },
});
