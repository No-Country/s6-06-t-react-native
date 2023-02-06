import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioDeSesion from "./src/screens/authnavigation/LogIn/LogIn";
import InicioDeSesion2 from "./src/screens/authnavigation/LogIn/LogIn2";

const Stack = createNativeStackNavigator();

import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

import AppNavigator from "./src/navigation/tabnavigation";

export default function App() {
  return (
    <Provider store={configureStore}>
      <AppNavigator />
    </Provider>
  );
}

