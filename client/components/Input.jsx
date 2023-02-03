import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useFonts } from "expo-font";

const InputComponent = ({ label, placeholder, keyboardType = 'default', requerimiento }) => {
  const [fontLoaded] = useFonts({
    SFProBold: require("../assets/fonts/SfProDisplay/SfProDisplay-Bold.otf"),
    SFProMedium: require("../assets/fonts/SfProDisplay/SfProDisplay-Medium.otf"),
    SFProRegular: require("../assets/fonts/SfProDisplay/SfProDisplay-Regular.otf"),
  });
  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#626A6D"
        keyboardType={keyboardType}
      />
      {requerimiento && <Text style={styles.requerimiento}>{requerimiento}</Text>}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  containerInput: {
    display: "flex",
    width: "100%",
    fontFamily: "SFProRegular",
  },
  label: {
    fontFamily: "SFProRegular",
    fontSize: 15,
    marginBottom: 4,
  },
  input: {
    outlineColor: '#4245E5',
    backgroundColor: "#DEE3E5",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 15,
    width: "100%",
    flex: 1,
    marginBottom: 5
  },
  requerimiento:{
    color: '#37474F',
    fontSize: 12,
  }
});
