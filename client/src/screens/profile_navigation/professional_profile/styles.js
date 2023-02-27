import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 30,
  },
  topbar: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ppContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  ppButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#e0e0e0",
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 30,
    color: "#4245E5",
  },
  profession: {
    fontSize: 18,
    color: "#a9a9a9",
    lineHeight: 30,
  },
  editButton: {
    position: "absolute",
    top: 115,
    right: 40,
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  Textcontainer: {
    marginLeft: 2,
  },
  tab: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    marginHorizontal: 25,
  },
  leftTab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  separadorTab:{
    height: 20,
    width: 1,
    backgroundColor: colors.primary_light,
    marginHorizontal: 10
  },
  datoUser:{
    textDecorationLine: 'underline',
  },
  infoTabs: {
    paddingHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
  },

});

export default styles;
