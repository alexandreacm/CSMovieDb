import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.text1}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.text2}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
