import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "./styles";
import Logo from "../../../../assets/Logo.png";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Transition = () => {
  const { isLoading, token } = useSelector((state) => state.login);
  const navigation = useNavigation();
  if (isLoading) {
    return (
      <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        <View style={styles.main}>
          <Image source={Logo} style={{ width: 350, height: 350 }} />
          <Text style={[styles.text]}>Iniciando sesión...</Text>
        </View>
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
