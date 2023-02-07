import { StyleSheet, View } from "react-native";
import Registro from "./screens/signup";

export default function App() {
  return (
    <View style={styles.container}>
      <Registro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
