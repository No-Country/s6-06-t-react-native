import { Text, View, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SelectList } from "react-native-dropdown-select-list";
import { Controller, useController, useForm } from "react-hook-form";

const InputComponentSelectList = ({
  label,
  data,
  placeholder = "Selecciona tu respuesta",
  requerimiento,
  control,
  name,
  error,
  setValue
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setValue(name, selected);
  }, [selected]);

  
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnChange = () => {
    setErrorMessage(null);
  };

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
      <Controller
        control={control}
        onChange={handleOnChange}
        render={({ field: { onChange, onBlur } }) => (
          <SelectList
            setSelected={setSelected}
            data={data}
            save="value"
            searchPlaceholder=""
            placeholder={placeholder}
            boxStyles={[styles.input, isFocused && styles.outLine]}
            dropdownStyles={styles.dropdownStyles}
            search={false}
            dropdownShown={isFocused}
          />
        )}
        name={name}
      />
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
      {error && <Text style={styles.error}>{error.message}</Text>}
    </TouchableOpacity>
  );
};

export default InputComponentSelectList;
