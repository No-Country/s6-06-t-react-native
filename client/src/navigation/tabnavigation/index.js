import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../authnavigation/auth";
import { useSelector } from "react-redux";
import DrawerNavegation from "../drawerNavigation/drawer";
import { AsyncStorage } from "react-native";

const AppNavigator = () => {
  const [userInfo, setUserInfo] = useState(null);

  const getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);
      if (userData) {
        setUserInfo(userData);
      }
    } catch (error) {
      console.warn(`AppNavigator getToken error: ${error}`);
    }
  };
  const asyncToken = userInfo ? userInfo.token : null;
  const { token } = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {!token && <AuthNavigator />}
      {token && <DrawerNavegation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
