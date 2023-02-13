import { Text, View, TouchableOpacity } from "react-native";
import { useCallback, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SelectList } from "react-native-dropdown-select-list";

const InputComponentSelectList = ({
  label,
  data,
  placeholder = "Selecciona tu respuesta",
  requerimiento,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [selected, setSelected] = useState([]);

  const [fontsLoaded] = useFonts({
    SFProRegular: require("./../../../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
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
    <TouchableOpacity
      style={styles.containerInput}
      onLayout={onLayoutRootView}
      onPress={() => setIsFocused(!isFocused)}
    >
      <Text style={styles.label}>{label}</Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          searchPlaceholder=""
          placeholder={placeholder}
          boxStyles={[styles.input, isFocused && styles.outLine]}
          dropdownStyles={styles.dropdownStyles}
          search={false}
          dropdownShown={isFocused}
        />
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
    </TouchableOpacity>
  );
};

export default InputComponentSelectList;
