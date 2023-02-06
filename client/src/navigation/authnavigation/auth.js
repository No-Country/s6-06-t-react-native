import React from "react";  
import OnBoarding from "../../screens/authnavigation/onboarding";
import Home from "../../screens/authnavigation/home";
import LogIn from "../../screens/authnavigation/login";
import SignUp from "../../screens/authnavigation/signup";
import Transition from "../../screens/authnavigation/transition";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = ({navigation}) => {
    return(
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
          }}
    >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Transition" component={Transition} /> 
    </Stack.Navigator>
    )
    
}
export default AuthNavigation