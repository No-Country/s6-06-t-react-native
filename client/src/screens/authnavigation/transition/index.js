import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { styles } from "./styles";
import LottieView from "lottie-react-native";
import Logo from "../../../../assets/Logo.png";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Transition = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();
  const { isLoading, token, error } = useSelector((state) => state.login);

  if (isLoading) {
    return (
      <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        {/* <View style={{backgroundColor: 'white',opacity: .25, height: 22, width: width, position:'absolute', top: 0}}></View> */}
        <View style={styles.main}>
          <Image source={Logo} style={{ width: 350, height: 350 }} />
          <Text style={[styles.text]}>Iniciando sesión...</Text>
          {/* {isLoading ? <ActivityIndicator size="large"/> : <></>} */}
        </View>
        {/* <Text style={[styles.Text, {position: 'absolute', top: height/2+50, color: 'white'}]}>Cargando Mapas</Text> */}
      </View>
    );
  }
  if (token) {
    navigation.navigate("Home");
  } else {
    alert("Usuario o contraseña inválidos");
    navigation.navigate("LogIn2");
  }
};
export default Transition;
