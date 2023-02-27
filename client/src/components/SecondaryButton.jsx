import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";

const SecondaryButton = ({ text, handler }) => {
  const HandleLogin = () => {
    /*LOGICA LOGIN*/
  };

  return (
    <View>
      <TouchableOpacity onPress={handler} style={styles.signIn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 25,
    height: 45,
    marginTop: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
  text: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 23,
  },
});
