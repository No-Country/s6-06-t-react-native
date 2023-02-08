import React from "react";
import OnBoarding from "../../screens/authnavigation/onboarding";
import Home from "../../screens/authnavigation/home";
import SignUp from "../../screens/authnavigation/signup";
import SignUpStepTwo from "../../screens/authnavigation/signupStepTwo";
import Transition from "../../screens/authnavigation/transition";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../../screens/authnavigation/LogIn/LogIn";
import LogIn2 from "../../screens/authnavigation/LogIn/LogIn2";
import SignUpStepThree from "../../screens/authnavigation/signUpStepThree";

const Stack = createNativeStackNavigator();

const AuthNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="LogIn2" component={LogIn2} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpStepTwo" component={SignUpStepTwo} />
      <Stack.Screen name="SignUpStepThree" component={SignUpStepThree} />
      <Stack.Screen name="Transition" component={Transition} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
