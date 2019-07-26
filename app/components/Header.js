import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Social Apps Memory</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: "#f3f3f3"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center"
  }
});

export default Header;
