import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.viewBody}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default Home;
