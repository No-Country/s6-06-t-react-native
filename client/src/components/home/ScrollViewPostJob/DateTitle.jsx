import { Text, View } from "react-native";
import { trasformDateADateString } from "../../../utils/Date";
import { styles } from "./styles";

const DateTitle = ({ d }) => {
  return (
    <>
      <View style={styles.datePublish}>
        <View style={styles.line}></View>
        <Text style={styles.date}>{trasformDateADateString(d)}</Text>
        <View style={styles.line}></View>
      </View>
    </>
  );
};

export default DateTitle;
