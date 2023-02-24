import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const CardInfoProfesional = ({ cardTitle, aniadir, userData }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate("AddExperience")}
    >
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
          {cardTitle}
        </Text>
        <Feather
          name="edit-3"
          size={22}
          color="blue"
          style={{ marginRight: 10, marginTop: 10 }}
        />
      </View>

      {userData ? (
        <TouchableOpacity
          style={styles.txtcontainer}
          onPress={() => navigation.navigate("AddExperience")}
        >
          <View style={styles.aniadirWrapper}>
            <Text style={styles.text}>{aniadir}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <Text>2021 - Actualidad</Text>
          <View>
            <Text>Diseñadora</Text>
            <View>
              <Text>Motomundo -</Text>
              <Text>Freelance</Text>
            </View>
          </View>
          <Text>
            Trabajo para clientes locales e internacionales. Diseño y rediseño
            mobile y web. UX Research. Benchmarking...
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardInfoProfesional;

//Style component as a box with shadow and rounded corners height 132px
