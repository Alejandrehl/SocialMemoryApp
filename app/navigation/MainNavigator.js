import React from "react";
import { Icon } from "react-native-elements";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Home from "../screens/Home";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={30}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#ffc107"
    }
  }
);

export default createAppContainer(RootStack);
