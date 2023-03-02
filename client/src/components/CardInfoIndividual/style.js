import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: "white",
    marginTop: 10,
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    padding: 13,
  },
  wrapperInformation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperImagen: {
    top: -35,
    left: 12,
    width: 80,
  },
  img: {
    width: "60%",
    resizeMode: "contain",
  },
  wrapperInformacion: {
    flex: 3,
    paddingRight: 30,
  },
  dates: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  descriptionWrapper: {
    marginBottom: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  institutionWrapper: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90%",
  },
  primaryData: {
    fontSize: 16,
  },
  secondaryData: {
    fontSize: 16,
    color: colors.grey_placeholder,
    maxWidth: "70%",
  },
  description: {},
  iconsWrappers: {
    display: "flex",
    flexDirection: "row",
  },
  icono: {
    color: colors.primary,
  },
  separador: {
    height: 20,
    width: 20,
  },
});
