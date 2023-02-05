import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const StepsRegister = ({ number, active }) => {
  const [fontsLoaded] = useFonts({
    SFProMedium: require("../assets/fonts/SfProDisplay/SfProDisplay-Medium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.stepWrapper} onLayout={onLayoutRootView}>
      {(number === "2" || number === "3") && (
        <View style={[styles.lineStep, !active && styles.lineStepInactive, number === '2' && styles.lineStepTwo]}></View>
      )}
      <View style={[styles.actualStepCircle, !active && styles.actualStepCircleInactive]}>
        <Text style={styles.number}>{number}</Text>
      </View>
      {number !== "3" && <View style={[styles.lineStep, !active && styles.lineStepInactive, number === '2' && styles.lineStepTwo]}></View>}
    </View>
  );
};

export default StepsRegister;

const styles = StyleSheet.create({
  stepWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flex: 1,
  },
  actualStepCircle: {
    height: 33,
    width: 33,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#4245E5",
    borderRadius: 1000,
    marginLeft: 3,
    marginRight: 3,
  },
  actualStepCircleInactive: {
    backgroundColor: "#504E4E",
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
});
