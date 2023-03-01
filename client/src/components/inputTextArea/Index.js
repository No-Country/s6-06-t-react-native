import {
  Text,
  TextInput,
  View,
} from "react-native";
import { colors } from "../../constants";
import { styles } from "./style";

const InputTextArea = ({label, error, requerimiento, defaultValue}) => {
  return (
    <View style={styles.wrapperTextArea}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={true}
        numberOfLines={6}
        style={styles.textArea}
        selectionColor={colors.primary}
        defaultValue={defaultValue}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
      {requerimiento && (
        <Text style={styles.requerimiento} >{requerimiento}</Text>
      )}
    </View>
  )
}

export default InputTextArea