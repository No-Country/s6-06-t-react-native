import { Text, TouchableHighlight, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

const ButtonRegistro = () => {
  return (
    <TouchableHighlight style={styles.mainWrapper} >
      <View style={styles.secondaryWrapper}>
        <AntDesign name="arrowleft" size={20} color="#06087E" />
        <Text style={styles.text}>Registro</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ButtonRegistro;