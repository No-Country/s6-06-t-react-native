import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "700",
  },
  main: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
