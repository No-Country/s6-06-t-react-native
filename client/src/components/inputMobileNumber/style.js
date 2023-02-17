import { StyleSheet } from "react-native";

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
  inputMobileWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    outlineColor: "#4245E5",
    backgroundColor: "#DEE3E5",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 15,
    flex: 3,
    marginBottom: 5,
    color: "#000",
    textAlign: 'center'
  },
  inputRegionalNumber: {
    marginRight: 11,
    flex:1
  },
  outLine: {
    borderColor: "#4245E5",
    borderWidth: 1,
  },
  requerimiento: {
    color: "#37474F",
    fontSize: 12,
  },
  error: {
    color: "red",
  },
  wrapperErrors: {
    display: 'flex',
    flexDirection: 'row'
  },
  wrapperErrorPrefix: {
    flex: 4
  },
  wrapperErrorPhone:{
    flex: 8
  }
});
