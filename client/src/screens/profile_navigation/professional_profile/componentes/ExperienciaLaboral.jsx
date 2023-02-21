import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";

const ExperienciaLaboral = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} onPress={() => navigation.navigate("AddExperience")}>
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
          Experiecia Laboral
        </Text>
        <Feather
          name="edit-3"
          size={22}
          color="blue"
          style={{ marginRight: 10, marginTop: 10 }}
        />
      </View>

      <TouchableOpacity
        style={styles.txtcontainer}
        onPress={() => navigation.navigate("AddExperience")}
      >
          <Text style={styles.text}>
            Anadir Experiencia Laboral
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
          </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExperienciaLaboral;

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
  },
});
