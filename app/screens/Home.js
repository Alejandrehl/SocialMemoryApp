import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

import Score from "../components/Score";
import Card from "../components/Card";

import helpers from "../utils/helpers";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Text>RENDER DE CELDAS</Text>
      </View>
      <Score score={0} />
      <Button
        onPress={() => console.log("PRess")}
        title="Reset"
        color="#008CFA"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  body: {
    flex: 18,
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20
  }
});

export default Home;
