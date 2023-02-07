import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PrimaryButton = ({ text, handler }) => {
  return (
    <View>
      <TouchableOpacity onPress={handler} style={styles.signIn}>
        <Text style={{ color: "white", fontWeight: "600" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: "#4245E5",
    width: '100%',
    height: 45,
    marginTop: 20,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
