import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import progreso from "../../../assets/progreso.png";
import BackButton from "../BackButton";

const WorkInProgress = ({ color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={{ position: "absolute", top: 15, left: 15 }}>
        <BackButton />
      </View>
      <Animatable.Image
        source={progreso}
        style={styles.image}
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      />
      {color === "#6264BC" ? (
        <Text style={[styles.title, { color: "white" }]}>
          ¡Pantalla en progreso!
        </Text>
      ) : (
        <Text style={[styles.title]}>¡Pantalla en progreso!</Text>
      )}
      {color === "#6264BC" ? (
        <Text style={styles.subtitle2}>
          Estamos trabajando para que pronto puedas acceder a grupos privados de
          trabajo, y brindes lo mejor de vos.
        </Text>
      ) : (
        <Text style={styles.subtitle}>
          Pronto podrás formar parte de comunidades en las cuales vas a poder
          compartir información e interactuar con colegas.
        </Text>
      )}
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
    height: "100%",
  },
  back: { alignSelf: "flex-start", top: -35 },
  image: {
    height: 300,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 30,
  },
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
  subtitle2: {
    color: "white",
    fontSize: 15,
    marginHorizontal: 30,
    lineHeight: 30,
    marginVertical: 20,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
