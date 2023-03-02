import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    top: "-100%",
    left: 10,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey_line,
    zIndex: 10,
  },
});
