import { View, TextInput, Image, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

export default function NavMenu({ pathImgUser }) {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const getImgProfile = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);
      if (userData) {
        setUserInfo(userData);
      }
    } catch (e) {
      console.log("NavMenu - getImgProfile error: " + e);
    }
  };

  
  useEffect(() => {
    getImgProfile();
  }, []);

  const img = userInfo ? userInfo.img_avatar : pathImgUser;

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
            navigation.navigate("ProfileStack");
          }}
        >
          <Image source={{ uri: img }} style={[styles.imgUserHeader]} />
        </Pressable>
      </View>
    </View>
  );
}
