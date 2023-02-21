import { Feather, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../../../constants";
import PrimaryButton from "../../../../components/PrimaryButton";

const Idiomas = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [idiomas, setIdiomas] = useState([]);
  const [nivel, setNivel] = useState("");
  // FALTA LÓGICA
  // RUTA BACK
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <View>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Idiomas
            </Text>
            <Feather
              name="edit-3"
              size={22}
              color="blue"
              style={{ marginRight: 10, marginTop: 10 }}
            />
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.text}>
              Añadir Idiomas{" "}
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* -------------------MODAL--------------------- */}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <AntDesign name="close" size={25} style={styles.x} />
          </TouchableOpacity>
          <Text style={styles.sobreMi}>Agregar Idioma</Text>
          <Text style={styles.filasReq}>*Filas requeridas</Text>
          <Text style={styles.desc}>Idioma*</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <Picker
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              nivel={idiomas}
              onValueChange={(itemValue, itemIndex) => setIdiomas(itemValue)}
            >
              <Picker.Item label="Chino" value="chino" />
              <Picker.Item label="Español" value="espanol" />
              <Picker.Item label="Francés" value="frances" />
              <Picker.Item label="Inglés" value="ingles" />
              <Picker.Item label="Italiano" value="italiano" />
              <Picker.Item label="Portugués" value="portugues" />
              <Picker.Item label="Japonés" value="japones" />
            </Picker>
          </View>
          <Text style={styles.desc}>Nivel</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <Picker
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              nivel={nivel}
              onValueChange={(itemValue, itemIndex) => setNivel(itemValue)}
            >
              <Picker.Item label="A0-Principiante" value="a0" />
              <Picker.Item label="A1-Básico" value="a1" />
              <Picker.Item label="A2-B1 Pre-intermedio" value="a2" />
              <Picker.Item label="B1 - Intermedio" value="b1" />
              <Picker.Item label="B2 - Intermedio" value="b2" />
              <Picker.Item label="C1-C2 - Alto" value="c1" />
            </Picker>
          </View>
          <PrimaryButton text="Guardar" handler={""} />
        </View>
      </Modal>
    </View>
  );
};

export default Idiomas;

//Style component as a box with shadow and rounded corners height 132px

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    width: "100%",
    height: 132,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#4245E5",
    fontSize: 12,
  },
  modalContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    fontSize: 14,
    fontWeight: "500",
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - 25,
    height: 50,
    backgroundColor: "#fff",
    backgroundColor: colors.input_background,
    marginVertical: 15,
    justifyContent: "center",
  },
  sobreMi: {
    fontSize: 20,
    fontWeight: "600",
  },
  filasReq: {
    fontSize: 12,
    fontWeight: "400",
    color: "#626A6D",
    marginLeft: 5,
  },
  desc: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 15,
    marginBottom: -10,
  },
  x: {
    color: "#4245E5",
    fontSize: 25,
    marginLeft: -2,
    marginBottom: 5,
  },
});
