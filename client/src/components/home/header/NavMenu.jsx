import { View, TextInput, Image, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function NavMenu({ pathImgUser }) {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const state = useSelector((state) => state.login.user);

  useEffect(() => {
    setUserInfo(state);
  }, [state]);
  const img = userInfo ? userInfo.img_avatar : pathImgUser;

  return (
    <View style={styles.header}>
      <View>
        <Feather
          name="menu"
          size={24}
          color="black"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>
      <View style={styles.inputContain}>
        <EvilIcons name="search" size={24} color={colors.lightGrey} />
        <TextInput type="text" placeholder="Buscar en Sin Fronteras" />
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("ProfileStack");
          }}
        >
          <Image source={{ uri: img }} style={[styles.imgUserHeader]} />
        </Pressable>
      </View>
    </View>
  );
}
