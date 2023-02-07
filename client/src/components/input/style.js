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
  input: {
    outlineColor: "#4245E5",
    backgroundColor: "#DEE3E5",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 15,
    flex: 3,
    marginBottom: 5,
    color: "#000",
    zIndex: -1,
    elevation: -1
  },
  icon: {
    position: 'absolute',
    right: 18,
    top: 20
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
    borderColor: "#4245E5",
    borderWidth: 1,
  },
  requerimiento: {
    color: "#37474F",
    fontSize: 12,
  },
});