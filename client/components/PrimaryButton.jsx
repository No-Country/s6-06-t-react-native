import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PrimaryButton = ({text}) => {
  const HandleLogin = () => {/*LOGICA LOGIN*/};

  return (
    <View>
      <TouchableOpacity onPress={() => HandleLogin()} style={styles.signIn}>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {text}
        </Text>
      </TouchableOpacity>
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
});
