import { Feather } from "@expo/vector-icons";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TechTab = ({ text, color, edit = false }) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.textContainer, { backgroundColor: color }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {edit ? (
        <TouchableOpacity>
          <Feather name="edit-3" size={22} color="#4245E5" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TechTab;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 25,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    height: 35,
    alignItems: "center",
    borderRadius: 15,
    width: "90%",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
});
