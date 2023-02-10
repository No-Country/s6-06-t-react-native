import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PrimaryButton = ({ text, handler, width, disabled = false }) => {
  return (
    <View>
      <Pressable disabled={disabled} onPress={handler} style={[styles.signIn, width && styles.width]}>
        <Text style={{ color: "white", fontWeight: "600" }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: "#4245E5",
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
  }
});
