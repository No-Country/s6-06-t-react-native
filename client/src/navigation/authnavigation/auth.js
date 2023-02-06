import React from "react";  
import OnBoarding from "../../screens/authnavigation/onboarding";
import Home from "../../screens/authnavigation/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Probando from '../../../Probando';

const Stack = createNativeStackNavigator();

const AuthNavigation = ({navigation}) => {
    return(
    <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
            headerShown: false,
          }}
    >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="LogIn" component={Probando} />
        <Stack.Screen name="SignUp" component={Probando} />
        <Stack.Screen name="Transition" component={Transition} /> */}
    </Stack.Navigator>
    )
    
}
export default AuthNavigation