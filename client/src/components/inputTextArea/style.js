import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  wrapperTextArea:{
    marginBottom: 30
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
  },
  textArea:{
    textAlignVertical: 'top',
    backgroundColor: colors.input_background,
    borderRadius: 16,
    padding: 16
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
