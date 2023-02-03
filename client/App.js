import { StyleSheet, Text, View } from "react-native";
import InicioDeSesion from "./screens/InicioDeSesion";

export default function App() {
  return (
    <View style={styles.container}>
      <InicioDeSesion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
});
