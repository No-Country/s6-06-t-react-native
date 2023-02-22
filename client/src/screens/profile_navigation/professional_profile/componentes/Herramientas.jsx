import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { colors } from "../../../../constants";
import TechTab from "./TechTab";

const Herramientas = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
              Herramientas
            </Text>
            <Feather
              name="edit-3"
              size={22}
              color="blue"
              style={{ marginRight: 10, marginTop: 10 }}
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <TechTab text="Figma" color="#3B3DD1" />
            <TechTab text="Adobe Illustrator" color="#8284FF" />
            <TechTab text="Adobe Photoshop" color="#863BD1" />
          </View>
          <View>
            <View style={styles.line}></View>
            <View style={styles.plus}>
              <Text style={styles.plustitle}>
                Mostrar todas las herramientas
              </Text>
              <AntDesign name="arrowright" size={15} color="#8284FF" />
            </View>
          </View>
          {/* <View style={styles.txtcontainer}>
            <Text style={styles.text}>
              Añadir Herramientas{" "}
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
            </Text>
          </View> */}
        </View>
      </TouchableOpacity>
      {/* -------------------MODAL--------------------- */}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <View style={styles.arrow}>
                <AntDesign name="left" size={25} color="#4245E5" />
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>Herramientas</Text>
          </View>
          <View style={styles.subtitleCont}>
            <Text style={styles.desc}>Tecnologías</Text>
            <AntDesign name="plus" size={25} color="#4245E5" />
          </View>
          <TechTab edit={true} text="Figma" color="#3B3DD1" />
          <TechTab edit={true} text="Adobe Illustrator" color="#8284FF" />
          <TechTab edit={true} text="Adobe Photoshop" color="#863BD1" />
          <TechTab edit={true} text="HTML" color="#FFA8A7" />
          <TechTab edit={true} text="CSS" color="#D13BCB" />
          <TechTab edit={true} text="Jira" color="#3B3DD1" />
        </View>
        <View style={styles.subtitleCont}>
          <Text style={styles.desc}>Habilidades Interpersonales</Text>
          <AntDesign name="plus" size={25} color="#4245E5" />
        </View>
        <View style={styles.skillsCont}>
          <Text style={styles.skill}>
            Aún no agregaste habilidades interpersonales
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default Herramientas;

//Style component as a box with shadow and rounded corners height 132px

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    paddingBottom: 10,
    width: "100%",
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
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#8284FF",
    marginTop: 20,
  },
  plus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:10
  },
  plustitle: { color: "#8284FF", fontSize:14, paddingHorizontal:5 },
  modalContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  arrow: {
    marginRight: 10,
    backgroundColor: "#EDEDED",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: "20%",
  },
  desc: {
    fontSize: 15,
    fontWeight: "400",
  },
  subtitleCont: {
    marginTop: 20,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillsCont: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  skill: {
    fontSize: 14,
    color: "#888888",
    fontWeight: "400",
  },
});
