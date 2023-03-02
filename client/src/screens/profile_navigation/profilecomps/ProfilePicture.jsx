import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useImageUp } from "../../../hooks/useImageUp";
import { useSelector } from "react-redux";
import ModalSelect from "../../../components/Modal/ModalSelect";
const ProfilePicture = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png"
  );
  const [ModalVisible, setModalVisible] = useState(false);
  const state = useSelector((state) => state.login.user);
  const { pickCam, pickImage } = useImageUp();
  useEffect(() => {
    setUserInfo(state);
    setProfileImage(state.img_avatar);
  }, []);
  let handleSendPic = async () => {
    setModalVisible(!ModalVisible);
  };

  let select = async (type) => {
    if (type === "galery") {
      await pickImage(setProfileImage, state.token);
      setModalVisible(!ModalVisible);
    }
    if (type === "cam") {
      await pickCam(setProfileImage, state.token);
      setModalVisible(!ModalVisible);
    }
    setModalVisible(!ModalVisible);
  };
  return (
    <View style={styles.ppContainer}>
      <View>
        <Image
          source={{ uri: profileImage }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <Pressable style={styles.ppButton} onPress={handleSendPic}>
          <Image
            source={require("../icons/changepicture.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <ModalSelect
          modalVisible={ModalVisible}
          setModalVisible={setModalVisible}
          select={select}
        />
      </View>
      <Text style={styles.name}>
        {userInfo ? userInfo.fullName : "Usuario"}
      </Text>
      <Text style={styles.profession}>
        {" "}
        {userInfo ? userInfo.position : "Dev"}
      </Text>
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
