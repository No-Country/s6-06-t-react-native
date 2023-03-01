import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useImageUp } from "../../../hooks/useImageUp";
import { useUpdatePic } from "../../../hooks/usePost";
import { getUserData } from "../../../redux/actions/personalActions";
import { useSelector } from 'react-redux'
const ProfilePicture = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [profileImage, setProfileImage] = useState("https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png");
  const state = useSelector(state => state.login.user)
  
  const { pickCam, pickImage } = useImageUp();
  useEffect(() => {
    getUserData(setUserInfo, setProfileImage);
  }, []);

  
  let handleSendPic = ()=>{
    pickImage(setProfileImage, state.token)
  }
  

  return (
    <View style={styles.ppContainer}>
      <View>
        <Image
          source={{ uri: profileImage }}
          style={{ width: 100, height: 100 }}
        />
        <Pressable style={styles.ppButton} onPress={handleSendPic}>
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
