import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";

const PrimaryButton = ({ text, handler, width, disabledColor = false }) => {
  return (
    <View>
      <Pressable onPress={handler} style={[styles.signIn, width && styles.width, disabledColor && styles.disabledColor ]}>
        <Text style={{ color: "white", fontWeight: "600" }}>{text}</Text>
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
  },
  width:{
    width: '100%'
  },
  disabledColor: {
    backgroundColor: colors.primary_light
  }
});
