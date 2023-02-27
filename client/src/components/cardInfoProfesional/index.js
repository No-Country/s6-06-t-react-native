import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import WorkExpImg from "../../../assets/workExpImg.png";
import { colors } from "../../constants";
import { styles } from "./style";

const CardInfoProfesional = ({ route, cardTitle, aniadir, userData }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate({route})}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Text style={styles.titleCard}>{cardTitle}</Text>
        <View style={styles.iconWrapper}>
          {userData && <Ionicons name="add" size={30} color={colors.primary} />}
          <Feather
            name="edit-3"
            size={22}
            color={colors.primary}
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>

      {!userData ? (
        <TouchableOpacity
          style={styles.txtcontainer}
          onPress={() => navigation.navigate("AddExperience")}
        >
          <View style={styles.aniadirWrapper}>
            <Text style={styles.text}>{aniadir}</Text>
            <Text style={styles.iconoAdd}>+</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.wrapperInformation}>
          <View style={styles.wrapperImagen}>
            <Image
              source={require("../../../assets/workExpImg.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.wrapperInformacion}>
            <Text style={styles.workDate}>2021 - Actualidad</Text>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.titleWork}>Diseñadora</Text>
              <View style={styles.companyWrapper}>
                <Text style={styles.companyName}>Motomundo - </Text>
                <Text style={styles.contract}>Freelance</Text>
              </View>
            </View>
            <Text style={styles.workDescription}>
              Trabajo para clientes locales e internacionales. Diseño y rediseño
              mobile y web. UX Research. Benchmarking...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CardInfoProfesional;

//Style component as a box with shadow and rounded corners height 132px
