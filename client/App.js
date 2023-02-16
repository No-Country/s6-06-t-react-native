import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppNavigator from "./src/navigation/tabnavigation";
import Profile from "./src/screens/profile_navigation/profile/Profile"
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <Profile /> */}
    </Provider>
  );
}
