import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants";

const Tabs = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('DatosPersonales')}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Información Personal</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('PerfilProfesional')}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Perfil Profesional</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('MisPostulaciones')}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Mis Postulaciones</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Guardados")}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Guardados</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Configuracion")}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Configuracion</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 20,
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "rgba(117, 101, 123, 0.26)",
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  tabinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
    width: "80%",
  },
  icon: {
    fontSize: 20,
    color: colors.primary,
  },
  icon2: {
    fontSize: 20,
    color: "grey",
  },
});
