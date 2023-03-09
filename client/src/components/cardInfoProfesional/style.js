import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    minHeight: 132,
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
  titleCard: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txtcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  aniadirWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    marginRight: 3,
  },
  iconoAdd: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  wrapperInformation: {
    display: "flex",
    flexDirection: "row",
  },
  wrapperImagen: {
    flex: 1,
    top: -30,
    left: 12,
  },
  img: {
    width: "60%",
    resizeMode: "contain",
  },
  wrapperInformacion: {
    flex: 3,
    paddingRight: 30,
  },
  workDate: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  descriptionWrapper: {
    marginBottom: 13,
  },
  titleWork: {
    fontSize: 22,
    fontWeight: "500",
  },
  companyWrapper: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90%",
  },
  companyName: {
    fontSize: 16,
  },
  contract: {
    fontSize: 16,
    color: colors.grey_placeholder,
    maxWidth: "70%",
  },
  workDescription: {},
});
