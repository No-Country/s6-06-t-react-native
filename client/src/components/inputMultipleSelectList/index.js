import { Text, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const InputMultipleComponentSelectList = ({
  label,
  data,
  placeholder = "Selecciona tu respuesta",
  requerimiento,
  control,
  name,
  error,
  setValue,
}) => {

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
    <TouchableOpacity style={styles.containerInput} onLayout={onLayoutRootView}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        onChange={handleOnChange}
        render={({ field: { onChange, onBlur } }) => (
          <MultipleSelectList
            data={data}
            setSelected={(val) => setSelected(val)}
            placeholder={placeholder}
            boxStyles={[
              styles.input,
              selected.length > 1 && styles.inputWithSelected,
            ]}
            inputStyles={styles.inputStyles}
            badgeStyles={styles.badgeStyles}
            dropdownStyles={styles.dropdownStyles}
            arrowicon={
              <Ionicons
                name="md-chevron-down-outline"
                size={24}
                color="black"
              />
            }
            closeicon={<AntDesign name="close" size={24} color="black" />}
            search={false}
          />
        )}
        name={name}
      />
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
      {error && <Text style={styles.error}>{error?.message}</Text>}
    </TouchableOpacity>
  );
};

export default InputMultipleComponentSelectList;
