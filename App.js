import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

import Header from "./app/components/Header";
import Score from "./app/components/Score";
import Card from "./app/components/Card";

import helpers from "./app/utils/helpers";
import Navigator from "./app/navigation/MainNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
