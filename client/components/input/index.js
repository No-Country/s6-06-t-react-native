import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from './style'

const InputComponent = ({
  label,
  placeholder,
  keyboardType = "default",
  requerimiento,
  showPass,
}) => {
  const [fontsLoaded] = useFonts({
    SFProBold: require("../../assets/fonts/SfProDisplay/SfProDisplay-Bold.otf"),
    SFProMedium: require("../../assets/fonts/SfProDisplay/SfProDisplay-Medium.otf"),
    SFProRegular: require("../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });
  const [isFocused, setIsFocused] = useState(false);
  const [showPassState, setShowPassState] = useState(false);

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
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, isFocused && styles.outLine]}
          placeholder={placeholder}
          placeholderTextColor="#626A6D"
          selectionColor="#4245E5"
          keyboardType={keyboardType}
          secureTextEntry={showPass ? !showPassState : false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {showPass && (
          <TouchableHighlight
            style={styles.icon}
            onPress={() => setShowPassState(!showPassState)}
          >
            {!showPassState ? (
              <FontAwesome5 name="eye-slash" size={18} color="#4245E5" />
            ) : (
              <FontAwesome5 name="eye" size={18} color="#4245E5" />
            )}
          </TouchableHighlight>
        )}
      </View>
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </View>
  );
};

export default InputComponent;
