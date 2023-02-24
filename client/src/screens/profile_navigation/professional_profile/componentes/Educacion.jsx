import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Educacion = () => {
  const navigation = useNavigation();

  return (
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
          Educacion
        </Text>
        <Feather
          name="edit-3"
          size={22}
          color="blue"
          style={{ marginRight: 10, marginTop: 10 }}
        />
      </View>
      <View style={styles.txtcontainer}>
        <TouchableOpacity
          style={styles.txtcontainer}
          onPress={() => navigation.navigate("AddEducation")}
        >
          <Text style={styles.text}>
            Anadir Educacion{" "}
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Educacion;

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
