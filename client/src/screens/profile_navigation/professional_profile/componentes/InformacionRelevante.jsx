import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InfoRevField from "./InfoRevField";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "../../../../components/PrimaryButton";
const InformacionRelevante = ({ setIsModalVisible }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titlecont}>
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <AntDesign
            name="left"
            size={25}
            color="#4245E5"
            style={{ position: "absolute", left: -50, top: -12 }}
          />
        </TouchableOpacity>
        <Text style={styles.infotitle}>Información Relevante</Text>
      </View>
      <View style={styles.fields}>
        <InfoRevField label="Nombre y apellido" input="Camilo Vargas" />
        <InfoRevField label="Puesto Laboral" input="UX Designer" arrow={true} />
        <InfoRevField
          label="Disponibilidad horaria"
          input="Part-time(12 a 17hs)"
          arrow={true}
        />
        <InfoRevField
          label="Área laboral a la que querés pertenecer"
          input="Diseño"
          arrow={true}
        />
        <View style={styles.checkcont}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text> Quisiera ser Team Leader</Text>
        </View>
        <View style={styles.checkcont}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={(newValue) => setToggleCheckBox2(newValue)}
          />
          <Text> Quisiera ser Product Manager</Text>
        </View>
      </View>
      <PrimaryButton text="Guardar" handler={() => setIsModalVisible(false)} />
    </View>
  );
};

export default InformacionRelevante;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 100,
    marginTop: 10,
  },
  titlecont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  infotitle: { fontSize: 22, fontWeight: "500", marginRight: 10 },
  fields: {
    width: "100%",
    padding: 10,
    marginTop: 10,
  },
  checkcont: { display: "flex", flexDirection: "row", padding: 10 },
});
