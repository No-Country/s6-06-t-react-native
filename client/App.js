import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioDeSesion from "./screens/InicioDeSesion/InicioDeSesion";
import InicioDeSesion2 from "./screens/InicioDeSesion/InicioDeSesion2";

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

// <<<<<<< HEAD
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="InicioDeSesion" component={InicioDeSesion} />
//         <Stack.Screen name="InicioDeSesion2" component={InicioDeSesion2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
