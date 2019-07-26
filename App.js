import React from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./app/navigation/MainNavigator";
import GameState from "./app/context/game/GameState";

const App = () => {
  return (
    <View style={styles.container}>
      <GameState>
        <Navigator />
      </GameState>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
