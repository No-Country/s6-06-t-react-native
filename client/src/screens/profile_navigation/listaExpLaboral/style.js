import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    display: 'flex',
    padding: 13
  },
  containerCard: {
    backgroundColor: "white",
    marginTop: 10,
    flex: 1,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    padding: 13,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
