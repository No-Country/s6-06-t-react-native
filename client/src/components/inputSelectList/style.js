import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  containerInput: {
    display: "flex",
    width: "100%",
    fontFamily: "SFProRegular",
    marginBottom: 16,
  },
  label: {
    fontFamily: "SFProRegular",
    fontSize: 15,
    marginBottom: 4,
  },
  input: {
    outlineColor: colors.primary,
    backgroundColor: colors.input_background,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 15,
    width: "100%",
    marginBottom: 5,
    borderWidth: 0,
  },
  inputSelected: {
    width: "100%",
    borderColor: colors.primary,
    borderWidth: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomWidth: 0,
    backgroundColor: "#fff",
    color: "#626A6D",
  },
  lastInputSelected: {
    width: "100%",
    borderColor: colors.primary,
    borderWidth: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopWidth: 0,
    backgroundColor: "#fff",
  },
  defaultTextInput: {
    color: "#626A6D",
    fontSize: 15,
    textAlign: "left",
    padding: 0,
  },
  optionText: {
    textAlign: "left",
    fontSize: 18,
  },
  selectedOption: {
    backgroundColor: colors.primary,
  },
  requerimiento: {
    color: "#37474F",
    fontSize: 12,
  },
  dropdownStyles: {
    position: "relative",
    marginTop: -2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.primary,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderRadius: 8,
  },
  lastDropdownStyles: {
    position: "relative",
    marginTop: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.primary,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderRadius: 8,
  },
  error: {
    color: colors.danger,
  },
});
