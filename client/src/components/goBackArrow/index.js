import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const GoBackArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="left" size={20} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default GoBackArrow;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#EDEDED",
    width: 35,
    height: 35,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
