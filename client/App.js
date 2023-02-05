import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioDeSesion from "./screens/InicioDeSesion/InicioDeSesion";
import InicioDeSesion2 from "./screens/InicioDeSesion/InicioDeSesion2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InicioDeSesion" component={InicioDeSesion} />
        <Stack.Screen name="InicioDeSesion2" component={InicioDeSesion2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
