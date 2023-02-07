import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  
  const SecondaryButton = ({text}) => {
    const HandleLogin = () => {/*LOGICA LOGIN*/};
  
    return (
      <View>
        <TouchableOpacity onPress={() => HandleLogin()} style={styles.signIn}>
          <Text style={{ color: "#4245E5", fontWeight: "600" }}>
            {text}
          </Text>
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
      borderColor:"#4245E5",
      borderWidth: 1.5,
    },
  });
  