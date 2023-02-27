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
import PrimaryButton from "../../../../components/PrimaryButton";
import { colors } from "../../../../constants";

const SobreMi = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [aboutMe, setAboutMe] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Sobre mi
        </Text>
        <Feather
          name="edit-3"
          size={22}
          color="blue"
          style={{ marginRight: 10, marginTop: 10 }}
        />
      </TouchableOpacity>
      <View style={styles.txtcontainer}>
        <Text style={styles.text}>
          {data && data.about
            ? data.about
            : "Contales sobre vos a aquellos que miren tu perfil profesional..."}
        </Text>
      </View>

      {/* -------------------MODAL--------------------- */}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <AntDesign name="close" size={25} style={styles.x} />
          </TouchableOpacity>
          <Text style={styles.sobreMi}>Sobre mi</Text>
          <Text style={styles.filasReq}>*Filas requeridas</Text>
          <Text style={styles.desc}>Descripción</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused ? colors.primary : "transparent" },
            ]}
          >
            <TextInput
              value={aboutMe}
              onChangeText={(value) => setAboutMe(value)}
              placeholder={
                data
                  ? data.about
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              multiline={true}
            />
          </View>
          <View style={styles.numContainer}>
            <Text>{aboutMe.length ? aboutMe.length : 0}/3000</Text>
          </View>
          <PrimaryButton text="Guardar" handler={""} />
        </View>
      </Modal>
    </View>
  );
};

export default SobreMi;

//Style component as a box with shadow and rounded corners height 132px

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    minHeight: 132,
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
    padding: 10,
  },
  text: {
    color: "#888888",
  },
  modalContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - 25,
    height: 155,
    backgroundColor: "#fff",
    backgroundColor: colors.input_background,
    marginVertical: 15,
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
  numContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: -10,
  },
});
