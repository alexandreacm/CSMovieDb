import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome";
import { useTheme } from "styled-components/native";

type Props = {
  average?: string | undefined;
};

const StarRating = ({ average }: Props) => {
  const { COLORS } = useTheme();
  if (!average) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon testID="starIcon" name="star" color={COLORS.ui.STAR} size={24} />
      <Text style={styles.text}>{average}/10</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontSize: 18,
    color: "#7e7a7a",
    marginLeft: 10,
  },
});

//make this component available to the app
export default StarRating;
