import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import {} from "../types";

const GameState = props => {
  const initialState = {};
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{}}>{props.children}</GameContext.Provider>
  );
};

export default GameState;
