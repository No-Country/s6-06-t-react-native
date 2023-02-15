import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { AntDesign } from "@expo/vector-icons";


const PerfilProfesional = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <BackButton />
        <Text style={styles.title}>Perfil Profesional</Text>
      </View>

      <View style={styles.ppContainer}>
        <View>
          <Image
            source={require("./icons/profilepicture.png")}
            style={{ width: 100, height: 100 }}
          />
          <Pressable style={styles.ppButton}>
            <Image
                source={require("./icons/changepicture.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
        </View>
        <TouchableOpacity style={styles.editButton}>
            <AntDesign
                name="edit"
                size={25}
                color="black"
            />
        </TouchableOpacity>
        <Text style={styles.name}>Camilo Vargas</Text>
        <Text style={styles.profession}> Software Developer</Text>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#00BFFF",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 30,
  },
  topbar: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
  },
    ppContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    },
    ppButton: {
    position: "absolute",
    top: 70,
    left: 70,
    },
    name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    lineHeight: 30,
    color: "#4245E5",
    },
    profession: {
    fontSize: 18,
    color: "#a9a9a9",
    lineHeight: 30,
    },
    editButton: {
    position: "absolute",
    top: 115,
    right: 40,
    },

});

export default PerfilProfesional;
