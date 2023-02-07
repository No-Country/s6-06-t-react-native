import { Text, TextInput, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "./style";

const InputMobileNumber = ({
  label,
  placeholder,
  keyboardType = "default",
  requerimiento,
}) => {
  const [fontsLoaded] = useFonts({
    SFProBold: require("../assets/fonts/SfProDisplay/SfProDisplay-Bold.otf"),
    SFProMedium: require("../assets/fonts/SfProDisplay/SfProDisplay-Medium.otf"),
    SFProRegular: require("../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });
  const [isFocused, setIsFocused] = useState(false);
  // const [selected, setSelected] = useState("");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // const data = [
  //   { key: "1", value: "+54" },
  //   { key: "2", value: "+58" },
  //   { key: "3", value: "+57" },
  //   { key: "4", value: "+53" },
  // ];
  return (
    <View style={styles.containerInput} onLayout={onLayoutRootView}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputMobileWrapper}>
        {/* <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          defaultOption={{ key: "1", value: "+54" }}
          boxStyles={[styles.input, styles.inputRegionalNumber, isFocused && styles.outLine]}
          dropdownStyles={styles.dropdown}
          inputStyles={{width: 114}}
          searchPlaceholder=''
        /> */}
        <TextInput
          style={[styles.input, styles.inputRegionalNumber, isFocused && styles.outLine]}
          placeholder={placeholder}
          placeholderTextColor="#626A6D"
          selectionColor="#4245E5"
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TextInput
          style={[styles.input, isFocused && styles.outLine]}
          placeholder={placeholder}
          placeholderTextColor="#626A6D"
          selectionColor="#4245E5"
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </View>
  );
};

export default InputMobileNumber;

