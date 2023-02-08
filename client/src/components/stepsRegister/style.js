import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stepWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flex: 1,
  },
  actualStepCircle: {
    position: "relative",
    height: 33,
    width: 33,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4245E5",
    borderRadius: 1000,
    marginLeft: 3,
    marginRight: 3,
  },
  actualStepCircleInactive: {
    backgroundColor: "#504E4E",
    position: "relative",
  },
  number: {
    color: "#fff",
    fontFamily: "SFProMedium",
  },
  lineStep: {
    height: 2,
    width: 5,
    backgroundColor: "#4245E5",
    flex: 4,
  },
  lineStepTwo: {
    flex: 1,
  },
  lineStepInactive: {
    backgroundColor: "#504E4E",
  },
  descriptionStep: {
    position: "absolute",
    bottom: -34,
    width: '250%',
    textAlign: 'center',
    color: "#4245E5"
  },
  descriptionStepInactive: {
    color: "#504E4E"
  },
});