import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    height: 132,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aniadirWrapper:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center'
  },
  text:{
    color: colors.primary,
    fontSize: 16,
    marginRight: 3
  },
  iconoAdd:{
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20
  }
});
