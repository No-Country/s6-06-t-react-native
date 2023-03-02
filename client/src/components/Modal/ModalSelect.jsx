import React from "react";
import { View, StyleSheet, Modal, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const ModalSelect = ({ modalVisible, setModalVisible, select }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Selecciona una opción: </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => select("galery")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="image" size={24} color="white" />
                <Text style={styles.textStyle}>Galeria</Text>
              </View>
            </Pressable>
            <Text></Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => select("cam")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="camera" size={24} color="white" />
                <Text style={styles.textStyle}>Galeria</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalSelect;
