import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
  blackContainer: {
    paddingTop: 10,
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  whiteContainer: {
    paddingTop: 28,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  stepsContainer: {
    paddingHorizontal: 44,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    padding: 18,
    alignItems: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "700",
    color: "#06087E",
    fontSize: 27,
  },
  p: {
    marginTop: 25,
    textAlign: "center",
    width: "95%",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 22.5,
    letterSpacing: 1,
  },
  spam: {
    color: "#37474F",
    fontSize: 12,
    marginTop: 25,
    left: -30,
  },
  confirmation: {
    alignItems: "center",
    marginTop: Dimensions.get("screen").height - 600,
  },
  email: {
    fontSize: 12,
    fontWeight: "500",
  },
  click: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 10,
  },
});
