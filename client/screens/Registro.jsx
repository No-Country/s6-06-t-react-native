import { StyleSheet, View } from "react-native";
import StepsRegister from "../components/StepsRegister.jsx";

const Registro = () => {
  return (
    <View>
      <View style={styles.stepsContainer}>
        <StepsRegister number="1" active={true}/>
        <StepsRegister number="2" active={false}/>
        <StepsRegister number="3" active={false}/>
      </View>
    </View>
  );
};

export default Registro;

const styles = StyleSheet.create({
  stepsContainer: {
    paddingHorizontal: 44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
