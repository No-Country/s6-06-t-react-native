import React from "react";
import OnBoarding from "../../screens/authnavigation/onboarding";
import General from "../../screens/drawer_navegation/channels/general";
import SignUp from "../../screens/authnavigation/signup";
import SignUpStepTwo from "../../screens/authnavigation/signupStepTwo";
import Transition from "../../screens/authnavigation/transition";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../../screens/authnavigation/LogIn/LogIn";
import LogIn2 from "../../screens/authnavigation/LogIn/LogIn2";
import SignUpStepThree from "../../screens/authnavigation/signUpStepThree";
import Profile from "../../screens/authnavigation/Profile/Profile";
import PerfilProfesional from "../../screens/authnavigation/Profile/PerfilProfesional";






const AuthNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="LogIn2" component={LogIn2} />
      <Stack.Screen name="Home" component={General} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpStepTwo" component={SignUpStepTwo} />
      <Stack.Screen name="SignUpStepThree" component={SignUpStepThree} />
      <Stack.Screen name="Transition" component={Transition} />

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PerfilProfesional" component={PerfilProfesional} />

    
    </Stack.Navigator>
  );
};
export default AuthNavigation;
