import { useCallback } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const StepsRegister = ({ number, active, description }) => {
  const [fontsLoaded] = useFonts({
    'SFProMedium' : require("../../../assets/fonts/SfProDisplay/SfProDisplay-Medium.otf"),
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
        <View
          style={[
            styles.lineStep,
            !active && styles.lineStepInactive,
            number === "2" && styles.lineStepTwo,
          ]}
        ></View>
      )}
      <View
        style={[
          styles.actualStepCircle,
          !active && styles.actualStepCircleInactive,
        ]}
      >
        <Text style={styles.number}>{number}</Text>
        <Text
          style={[
            styles.descriptionStep,
            !active && styles.descriptionStepInactive,
          ]}
        >
          {description}
        </Text>
      </View>
      {number !== "3" && (
        <View
          style={[
            styles.lineStep,
            !active && styles.lineStepInactive,
            number === "2" && styles.lineStepTwo,
          ]}
        ></View>
      )}
    </View>
  );
};

export default StepsRegister;
