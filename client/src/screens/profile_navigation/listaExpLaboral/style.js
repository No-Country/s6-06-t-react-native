import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    display: "flex",
  },
  secondaryContainer: {
    padding: 19,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGrey,
  },
  containerList: {
    padding: 19,
  },
  titleAndIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleList: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
