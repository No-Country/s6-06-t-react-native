import { View, TextInput, Image, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function NavMenu({ pathImgUser }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View>
        <Feather name="menu" size={24} color="black" />
      </View>
      <View style={styles.inputContain}>
        <EvilIcons name="search" size={24} color={colors.lightGrey} />
        <TextInput type="text" placeholder="Buscar en Sin Fronteras" />
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image source={{ uri: pathImgUser }} style={[styles.imgUserHeader]} />
        </Pressable>
      </View>
    </View>
  );
}
