import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome";

type Props = {
  average?: number;
};

// create a component
const StarRating = ({ average }: Props) => {
  if (!average) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon testID="starIcon" name="star" color="yellow" size={25} />
      <Text style={styles.text}>{average}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 12,
  },
  text: {
    fontSize: 18,
    color: "#7e7a7a",
  },
});

//make this component available to the app
export default StarRating;
