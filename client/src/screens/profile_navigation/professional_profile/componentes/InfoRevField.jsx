import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const InfoRevField = ({ label, input, arrow=false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputcon}>
        <Text style={styles.input}>{input}</Text>
       { arrow && <AntDesign name="down" size={20} style={{paddingRight:10}}/>}
      </View>
    </View>
  );
};
export default InfoRevField;

const styles = StyleSheet.create({
  container: {},
  label: {fontSize:15},
  inputcon: {
    backgroundColor: "#EEEEEE",
    height: 45,
    borderRadius: 15,
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10
},
  input: {paddingLeft:10},
});
