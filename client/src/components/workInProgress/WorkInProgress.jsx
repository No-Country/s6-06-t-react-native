import { Image, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import progreso from "../../../assets/progreso.png";

const WorkInProgress = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image
        source={progreso}
        style={styles.image}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      />
      <Text style={styles.title}>¡Pantalla en progreso!</Text>
      <Text style={styles.subtitle}>
        Estamos trabajando para que pronto puedas acceder a grupos privados de
        trabajo, y brindes lo mejor de vos.
      </Text>
    </View>
  );
};

export default WorkInProgress;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: { height: 300, resizeMode: "contain", marginTop: 40 },
  title: {
    color: "#4245E5",
    fontSize: 34,
    fontWeight: "800",
    marginHorizontal: 5,
    letterSpacing: 3,
    marginBottom: 20,
  },
  subtitle: {
    color: "#4245E5",
    fontSize: 15,
    marginHorizontal: 30,
    lineHeight: 30,
    marginVertical: 20,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
