import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

const ButtonRegistro = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.mainWrapper} onPress={onPress}>
      <View style={styles.secondaryWrapper}>
        <AntDesign name="arrowleft" size={20} color="#06087E" />
        <Text style={styles.text}>Registro</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonRegistro;
