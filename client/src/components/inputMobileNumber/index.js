import { Text, TextInput, View } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const InputMobileNumber = ({
  label,
  placeholder,
  keyboardType = "default",
  requerimiento,
  onBlur,
  onChangeText,
  value,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    SFProRegular: require("../../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });

  const handleOnBlur = () => {
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
        <TextInput
          style={[
            styles.input,
            styles.inputRegionalNumber,
            isFocused && styles.outLine,
          ]}
          placeholder={placeholder}
          placeholderTextColor="#626A6D"
          selectionColor="#4245E5"
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={handleOnBlur}
          onChangeText={onChangeText}
        />
        <TextInput
          style={[styles.input, isFocused && styles.outLine]}
          placeholder={placeholder}
          placeholderTextColor="#626A6D"
          selectionColor="#4245E5"
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={handleOnBlur}
          onChangeText={onChangeText}
        />
      </View>
      <Text>{value}</Text>
      {error && <Text style={styles.error}>{error.message}</Text>}
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </View>
  );
};

export default InputMobileNumber;
