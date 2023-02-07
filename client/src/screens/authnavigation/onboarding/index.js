import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Logo from "../../../../assets/Logo.png";
const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Image source={Logo} style={{ width: 300, height: 300 }} />
      </TouchableOpacity>
    </View>
  );
};
export default OnBoarding;
