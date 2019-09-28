import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Score = ({ score }) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 20
  },
  score: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default Score;
