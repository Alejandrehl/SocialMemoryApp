import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import {} from "../types";
import cards from "../../utils/cards";

const GameState = props => {
  const initialState = {
    current_selection: [],
    selected_pairs: [],
    score: 0,
    cards: cards
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        current_selection: state.current_selection,
        selected_pairs: state.selected_pairs,
        score: state.score,
        cards: state.cards
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
