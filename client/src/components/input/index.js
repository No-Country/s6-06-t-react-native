import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCallback, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { colors } from "../../constants/colors";

const InputComponent = ({
  label,
  placeholder,
  keyboardType = "default",
  requerimiento,
  showPass,
  onBlur,
  onChangeText,
  value,
  error,
  editable = true
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassState, setShowPassState] = useState(false);

  const [fontsLoaded] = useFonts({
    SFProRegular: require("../../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleOnBlur = () => { 
    onBlur
    setIsFocused(false)
   }

  return (
    <View style={styles.containerInput} onLayout={onLayoutRootView}>
      {label && <Text style={[styles.label, !editable && styles.mutedText]}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, isFocused && styles.outLine]}
          placeholder={placeholder}
          placeholderTextColor={
           editable ? colors.grey_placeholder : colors.text_grey}
          selectionColor={colors.primary}
          keyboardType={keyboardType}
          secureTextEntry={showPass ? !showPassState : false}
          onFocus={() => setIsFocused(true)}
          onBlur={handleOnBlur}
          onChangeText={onChangeText}
          value={value}
          editable={editable}
        />
        {showPass && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowPassState(!showPassState)}
          >
            {!showPassState ? (
              <FontAwesome5 name="eye-slash" size={18} color={colors.primary} />
            ) : (
              <FontAwesome5 name="eye" size={18} color={colors.primary} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error.message}</Text>}
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </View>
  );
};

export default InputComponent;
