import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Tabs = () => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tab}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="user" style={styles.icon} />
          <Text style={styles.tabText}>Datos Personales</Text>
        </View>
        <Icon name="right" style={styles.icon2} />
      </View>
      <View style={styles.tab}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="solution1" style={styles.icon} />
          <Text style={styles.tabText}>Perfil Profesional</Text>
        </View>
        <Icon name="right" style={styles.icon2} />
      </View>
      <View style={styles.tab}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="book" style={styles.icon} />
          <Text style={styles.tabText}>Mis Postulaciones</Text>
        </View>
        <Icon name="right" style={styles.icon2} />
      </View>
      <View style={styles.tab}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="save" style={styles.icon} />
          <Text style={styles.tabText}>Guardados</Text>
        </View>
        <Icon name="right" style={styles.icon2} />
      </View>
      <View style={styles.tab}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon name="setting" style={styles.icon} />
          <Text style={styles.tabText}>Configuracion</Text>
        </View>
        <Icon name="right" style={styles.icon2} />
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 20,
    width: "100%",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 25,
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
    width: "80%",
  },
  icon: {
    fontSize: 20,
    color: "#4245E5",
  },
  icon2: {
    fontSize: 20,
    color: "grey",
  },
});
