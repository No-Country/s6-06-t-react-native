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
    flex: 3,
    marginBottom: 5,
    color: "#000",
    zIndex: -1,
    elevation: -1,
    fontSize: 17
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 20
  },
  dropdown:{
    position: 'absolute',
    width: 100,
    top: '90%',
    zIndex: 100010112,
    elevation: 3333,
    backgroundColor: '#DEE3E5'
  },
  outLine: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  requerimiento: {
    color: "#37474F",
    fontSize: 12,
    padding: 0
  },
  error:{
    color: colors.danger
  }
});