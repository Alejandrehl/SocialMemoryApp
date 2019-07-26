import React from "react";
import { StyleSheet, View, Button } from "react-native";

import Header from "./app/components/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff"
  }
});

export default App;
