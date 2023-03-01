import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InfoRevField from "./InfoRevField";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "../../../../components/PrimaryButton";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../../../constants";
const InformacionRelevante = ({ setIsModalVisible }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [puesto, setPuesto] = useState(null);
  const [disponibilidad, setDisponibilidad] = useState(null);
  const [area, setArea] = useState(null);

  return (
    <View style={styles.capo}>
      <View style={styles.container}>
        <View style={styles.titlecont}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <View style={styles.arrowcont}>
              <AntDesign name="left" size={25} color="#4245E5" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <View style={styles.line}></View>
            <Text style={styles.infotitle}>Información Relevante</Text>
          </View>
        </View>
        <View style={styles.fields}>
          <InfoRevField label="Nombre y apellido" input="Camilo Vargas" />
          <Text style={styles.label}>Puesto Laboral</Text>

          {/* ///----------- PUESTO LABORAL */}
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <Picker
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onValueChange={(itemValue) => {
                if (itemValue !== null) {
                  setPuesto(itemValue);
                  // console.log(itemValue);
                }
              }}
              style={styles.picker}
            >
              <Picker.Item
                label={puesto ? puesto : "Selecciona tu respuesta"}
                value={null}
                enabled={false}
              />
              <Picker.Item
                label="Desarrollador/a Back-end"
                value="Desarrollador/a Back-end"
              />
              <Picker.Item
                label="Desarrollador/a Front-end"
                value="Desarrollador/a Front-end"
              />
              <Picker.Item
                label="Desarrollador/a UX UI"
                value="Desarrollador/a UX UI"
              />
              <Picker.Item
                label="Desarrollador/a UI"
                value="Desarrollador/a UI"
              />
              <Picker.Item label="Project Manager" value="Project Manager" />
              <Picker.Item label="Team Leader" value="Team Leader" />
              <Picker.Item label="Tester" value="Tester" />
              <Picker.Item label="Otro" value="Otro" />
            </Picker>
          </View>

          {/* ///----------- DISPONIBILIDAD HORARIA */}
          <Text style={styles.label}>Disponibilidad Horaria</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <Picker
              onValueChange={(itemValue, itemIndex) =>
                setDisponibilidad(itemValue)
              }
              style={styles.picker}
            >
              <Picker.Item
                label={
                  disponibilidad ? disponibilidad : "Selecciona disponibilidad"
                }
                value={null}
                enabled={false}
              />
              <Picker.Item
                label="Part-time (10 a 13hs)"
                value="Part-time (10 a 13hs)"
              />
              <Picker.Item
                label="Part-time (12 a 17hs)"
                value="Part-time (12 a 17hs)"
              />
              <Picker.Item
                label="Full-time (10 a 17hs)"
                value="Full-time (10 a 17hs)"
              />
            </Picker>
          </View>

          {/* ///----------- AREA LABORAL */}
          <Text style={styles.label}>
            Área laboral a la que querés pertenecer
          </Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <Picker
              onValueChange={(itemValue, itemIndex) => setArea(itemValue)}
              style={styles.picker}
            >
              <Picker.Item
                label={area ? area : "Selecciona tu respuesta"}
                value={null}
                enabled={false}
              />
              <Picker.Item
                label="Análisis de datos"
                value="Análisis de datos"
              />
              <Picker.Item
                label="Desarrollo de software - Front/Back"
                value="Desarrollo de software - Front/Back"
              />
              <Picker.Item label="Diseño" value="Diseño" />
              <Picker.Item label="Testing" value="Testing" />
              <Picker.Item label="Otros" value="Otros" />
            </Picker>
          </View>

          <View style={styles.checkcont}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checktext}> Quisiera ser Team Leader</Text>
          </View>
          <View style={styles.checkcont}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={(newValue) => setToggleCheckBox2(newValue)}
            />
            <Text style={styles.checktext}> Quisiera ser Product Manager</Text>
          </View>
        </View>
        <PrimaryButton
          text="Guardar"
          handler={() => setIsModalVisible(false)}
        />
      </View>
    </View>
  );
};

export default InformacionRelevante;
const styles = StyleSheet.create({
  capo: { backgroundColor: "#4C4C4EC4" },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    bottom:-270,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom:40
  },
  arrowcont: {
    position: "absolute",
    backgroundColor: "#EDEDED",
    borderRadius: 50,
    height: 30,
    width: 30,
    left: -55,
    top: -180,
    justifyContent: "center",
  },
  line: {
    backgroundColor: "#8C8EDD",
    height: 4,
    width: 80,
    borderRadius: 25,
    marginBottom:7
  },
  titlecont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  infotitle: { fontSize: 18, fontWeight: "500", marginRight: 10 },
  fields: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    marginBottom: -20,
  },
  checkcont: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  checktext: { fontSize: 15, marginLeft: 5 },
  inputContainer: {
    fontSize: 12,
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - 25,
    height: 40,
    backgroundColor: "#fff",
    backgroundColor: colors.input_background,
    marginVertical: 15,
    justifyContent: "center",
  },
  label: {
    marginTop: -10,
    marginBottom: -10,
    fontSize: 15,
  },
});
