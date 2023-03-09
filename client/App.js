import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppNavigator from "./src/navigation/tabnavigation";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <Profile /> */}
    </Provider>
  );
}
