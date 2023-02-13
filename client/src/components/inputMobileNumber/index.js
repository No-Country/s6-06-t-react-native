import { Text, TextInput, View } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Controller } from "react-hook-form";

const InputMobileNumber = ({
  label,
  placeholderPrefix,
  placeholderPhoneNumber,
  keyboardType = "default",
  requerimiento,
  control,
  errors,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    SFProRegular: require("../../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });

  const handleOnBlur = (onBlur) => {
    onBlur;
    setIsFocused(false);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.containerInput} onLayout={onLayoutRootView}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputMobileWrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <TextInput
              style={[
                styles.input,
                styles.inputRegionalNumber,
                isFocused && styles.outLine,
              ]}
              placeholder={placeholderPrefix}
              placeholderTextColor="#626A6D"
              selectionColor="#4245E5"
              keyboardType={keyboardType}
              onFocus={() => setIsFocused(true)}
              onBlur={() => handleOnBlur(onBlur)}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="prefix"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur } }) => (
            <TextInput
              style={[
                styles.input,                
                isFocused && styles.outLine,
              ]}
              placeholder={placeholderPhoneNumber}
              placeholderTextColor="#626A6D"
              selectionColor="#4245E5"
              keyboardType={keyboardType}
              onFocus={() => setIsFocused(true)}
              onBlur={() => handleOnBlur(onBlur)}
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="phone"
        />
      </View>
        <View style={styles.wrapperErrors}>
          {errors?.prefix && (
            <Text style={[styles.error, styles.wrapperErrorPrefix]}>{errors?.prefix?.message}</Text>
          )}
          {errors?.phone && (
            <Text style={[styles.error, styles.wrapperErrorPhone]}>{errors?.phone?.message}</Text>
          )}
        </View>
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </View>
  );
};

export default InputMobileNumber;
