import { Entypo } from "@expo/vector-icons";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LinkedinButton = ({ handler }) => {
  return (
    <View>
      <TouchableOpacity onPress={handler} style={styles.signIn}>
        <Entypo name="linkedin" size={20} style={styles.linkedin} />
        <Text style={styles.text}>Inicia Sesión con LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkedinButton;

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: "#0C64C5",
    flexDirection: "row",
    width: Dimensions.get("window").width - 25,
    height: 45,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkedin: {
    color: "white",
    marginRight: 50,
  },
  text: { color: "white", fontWeight: "600", marginRight: 50 },
});
