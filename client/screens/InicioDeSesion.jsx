import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import conectedWorld from "../assets/ConnectedWorld.png";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
const InicioDeSesión = () => {
  return (
    <View style={styles.container}>
      <Image source={conectedWorld} style={styles.logo} resizeMode="contain" />
      <Text style={styles.description}>
        Somos una organización que busca acercar talentos IT con las compañías,
        potenciando sus habilidades y talentos en un entorno laboral real.
      </Text>
      <Text style={styles.title}>Fomentamos el trabajo sin fronteras.</Text>
      <PrimaryButton text="Iniciar Sesión" />
      <SecondaryButton text="Registrarse" />
    </View>
  );
};

export default InicioDeSesión;
const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    marginVertical: 10,
  },
});
