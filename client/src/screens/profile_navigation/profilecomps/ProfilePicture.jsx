import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { getUserData } from "../../../redux/actions/personalActions";

const ProfilePicture = () => {
  const [userInfo, setUserInfo] = useState(null);

  
  useEffect(() => {
    getUserData(setUserInfo);
  }, []);

  const profileImage = userInfo
    ? userInfo.img_avatar
    : "../icons/profilepicture.png";

  return (
    <View style={styles.ppContainer}>
      <View>
        <Image
          source={{ uri: profileImage }}
          style={{ width: 100, height: 100 }}
        />
        <Pressable style={styles.ppButton}>
          <Image
            source={require("../icons/changepicture.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </View>
      <Text style={styles.name}>
        {userInfo ? userInfo.fullName : "Camilo Vargas"}
      </Text>
      <Text style={styles.profession}> Software Developer</Text>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
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
});
