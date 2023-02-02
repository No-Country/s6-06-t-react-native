import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import conectedWorld from "../assets/ConnectedWorld.png";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
const InicioDeSesión = () => {
  return (
    <SafeAreaView 
    // style={styles.blackTop}
    >
      <View style={styles.container}>
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
        <PrimaryButton text="Iniciar Sesión" />
        <SecondaryButton text="Registrarse" />
      </View>
    </SafeAreaView>
  );
};

export default InicioDeSesión;
const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    height: 280,
    marginBottom: -10,
    marginTop: -10,
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
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white",
  },
  blackTop: {
    backgroundColor: "black",
    height: 20,
    width: "100%",
  },
});
