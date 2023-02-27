import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
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
  wrapperBlockData:{
    marginBottom: 10,
    display: 'flex',
  },
  titleData:{
    fontSize:19,
    fontWeight: 'bold'
  },
  info:{
    fontSize:18,
    color: colors.primary,
    marginLeft: 5
  }
});
