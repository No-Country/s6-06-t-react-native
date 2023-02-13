import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 




const Tabs = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("DatosPersonales")}
      >
        <View style={styles.tabinfo}>
          <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Datos Personales</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("PerfilProfesional")}
      >
        <View style={styles.tabinfo}>
        <FontAwesome5 name="user" style={styles.icon} />
          <Text style={styles.tabText}>Perfil Profesional</Text>
        </View>
        <AntDesign name="right" style={styles.icon2} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("MisPostulacions")}
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
    shadowColor: "#0d080f",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
    marginBottom: 30,
    marginHorizontal: 20,
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
    color: "#4245E5",
  },
  icon2: {
    fontSize: 20,
    color: "grey",
  },
});
