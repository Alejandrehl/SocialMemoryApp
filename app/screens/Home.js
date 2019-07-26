import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

import Score from "../components/Score";
import Card from "../components/Card";

import GameContext from "../context/game/gameContext";
import helpers from "../utils/helpers";

const Home = ({ navigation }) => {
  const gameContext = useContext(GameContext);
  const {
    current_selection,
    selected_pairs,
    score,
    cards,
    resetCards
  } = gameContext;

  const getRowContents = cards => {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach(item => {
      count += 1;
      contents.push(item);
      if (count == 4) {
        contents_r.push(contents);
        count = 0;
        contents = [];
      }
    });

    return contents_r;
  };

  const renderCards = cards => {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          src={card.src}
          name={card.name}
          color={card.color}
          is_open={card.is_open}
          clickCard={() => console.log("CLICKEANDO CARD")}
        />
      );
    });
  };

  const renderRows = () => {
    let contents = getRowContents(cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          {renderCards(cards)}
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>{renderRows.call(this)}</View>
      <Score score={score} />
      <Button onPress={resetCards} title="Reset" color="#008CFA" />
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
