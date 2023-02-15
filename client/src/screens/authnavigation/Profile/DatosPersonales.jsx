import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

const DatosPersonales = () => {
  const [userInfo, setUserInfo] = useState(null);

  const isLoggedIn = async () => {
    try {
      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);
      if (userData) {
        setUserInfo(userData);
      }
    } catch (e) {
      console.log("Is logged in error : " + e);
    }
  };
  console.log(userInfo);
  useEffect(() => {
    isLoggedIn();
  }, []);

  {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topbar}>
          <BackButton component="Home" />
          <Text style={styles.title}>Datos Personales</Text>
        </View>

        <View style={styles.ppContainer}>
          <View>
            <Image
              source={
                userInfo
                  ? { uri: userInfo.img_avatar }
                  : require("./icons/profilepicture.png")
              }
              style={{ width: 100, height: 100 }}
            />
            <Pressable style={styles.ppButton}>
              <Image
                source={require("./icons/changepicture.png")}
                style={{ width: 30, height: 30 }}
              />
            </Pressable>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <AntDesign name="edit" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.name}>
            {userInfo ? userInfo.fullName : "Camilo Vargas"}
          </Text>
          <Text style={styles.profession}>
            {userInfo && userInfo.position === "fullstack"
              ? "Full-Stack Developer"
              : "Software Developer"}
          </Text>
          <Text style={styles.phone}>
            Teléfono: {userInfo ? userInfo.phone : ""}
          </Text>
          <Text style={styles.phone}>
            {" "}
            Email: {userInfo ? userInfo.phone : ""}
          </Text>
          <Text style={styles.phone}>
            Posts:{" "}
            {userInfo && userInfo.posts.length > 0
              ? userInfo.posts
              : "No has publicado aún"}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#00BFFF",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 30,
  },
  topbar: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 20,
  },
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
    fontSize: 27,
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
  editButton: {
    position: "absolute",
    top: 115,
    right: 40,
  },
  phone: {
    fontSize: 15,
    paddingVertical: 4,
  },
});

export default DatosPersonales;
