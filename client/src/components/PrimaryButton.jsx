import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../constants/colors";

const PrimaryButton = ({ text, handler, width, disabledColor = false }) => {
  return (
    <View>
      <Pressable
        onPress={handler}
        style={[
          styles.signIn,
          width && styles.width,
          disabledColor && styles.disabledColor,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: colors.primary,
    width: Dimensions.get("window").width - 25,
    height: 45,
    marginTop: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  width: {
    width: "100%",
  },
  disabledColor: {
    backgroundColor: colors.primary_light,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 23,
  },
});
