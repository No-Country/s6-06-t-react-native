import { Text, TextInput, View } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font"

const InputMobileNumber = ({
  label,
  placeholder,
  keyboardType = "default",
  requerimiento,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [selected, setSelected] = useState("");

  // const data = [
  //   { key: "1", value: "+54" },
  //   { key: "2", value: "+58" },
  //   { key: "3", value: "+57" },
  //   { key: "4", value: "+53" },
  // ];

  const [fontsLoaded] = useFonts({
    'SFProRegular': require("../../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
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
