import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import conectedWorld from "../../assets/ConnectedWorld.png";
import PrimaryButton from "../../../../components/PrimaryButton";
import SecondaryButton from "../../../../components/SecondaryButton";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <View style={styles.main}>
        <Image
          source={conectedWorld}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.description}>
          Somos una organización que busca acercar talentos IT con las
          compañías, potenciando sus habilidades y talentos en un entorno
          laboral real.
        </Text>
        <Text style={styles.title}>Fomentamos el trabajo sin fronteras.</Text>
        <PrimaryButton
          text="Iniciar Sesión"
          handler={() => {
            navigation.navigate("LogIn2");
          }}
        />
        <SecondaryButton text="Registrarse" />
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingTop: 30,
    width: "100%",
    height: "95%",
    top: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    height: 280,
    marginTop: -60,
  },
  description: {
    fontWeight: "500",
    alignSelf: "center",
    lineHeight: 20,
  },
  title: {
    fontWeight: "700",
    alignSelf: "center",
    fontSize: 17,
    marginVertical: 10,
  },
});
