import 'react-native-gesture-handler';
import * as React from "react";
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

