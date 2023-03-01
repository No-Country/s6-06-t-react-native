import { Text, TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { styles } from "./style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import SelectDropdown from "react-native-select-dropdown";
import { Controller } from "react-hook-form";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const InputComponentSelectList = ({
  label,
  data,
  placeholder = "Selecciona tu respuesta",
  requerimiento,
  control,
  name,
  error,
  setValue,
  lastList,
  defaultValue
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [selected, setSelected] = useState();

  useEffect(() => {
    setValue(name, selected);
  }, [selected]);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnChange = () => {
    setErrorMessage(null);
  };

  const handleOnBlur = (onBlur) => {
    onBlur;
    setIsFocused(false);
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
          <SelectDropdown
            data={data}
            defaultButtonText={placeholder}
            buttonStyle={
              !isFocused
                ? styles.input
                : lastList
                ? styles.lastInputSelected
                : styles.inputSelected
            }
            buttonTextStyle={styles.defaultTextInput}
            dropdownStyle={
              lastList ? styles.lastDropdownStyles : styles.dropdownStyles
            }
            rowTextStyle={styles.optionText}
            selectedRowStyle={styles.selectedOption}
            dropdownOverlayColor={"rgba(0, 0,0, 0)"}
            onSelect={setSelected}
            onFocus={() => setIsFocused(!isFocused)}
            onChangeSearchInputText={(value) => onChange(value)}
            renderDropdownIcon={(isOpened) => {
              return isOpened ? <AntDesign name="close" size={24} color="black" /> : <Ionicons name="md-chevron-down-outline" size={24} color="black" />;
            }}
            onBlur={() => handleOnBlur(onBlur)}
            defaultValue={defaultValue}
          />
        )}
        name={name}
      />
      {requerimiento && (
        <Text style={styles.requerimiento}>{requerimiento}</Text>
      )}
      {!selected && error && <Text style={styles.error}>{error?.message}</Text>}
    </TouchableOpacity>
  );
};

export default InputComponentSelectList;
