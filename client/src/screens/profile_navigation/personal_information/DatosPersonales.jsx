import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Modal,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import { useDispatch } from "react-redux";
import {
  editPersonalInfo,
  getUserData,
} from "../../../redux/actions/personalActions";
import { colors } from "../../../constants";

const DatosPersonales = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const dispatch = useDispatch();

  const editedUser = {
    fullName: name,
    phone: phone,
    email: email,
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editPersonalInfo(editedUser, userInfo.token))
      .then(() => getUserData(setUserInfo))
      .then(() => isLoggedIn())
      .then(() => setIsModalVisible(false));
  };

  const isLoggedIn = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        setUserInfo(parsedUserData);
        setName(parsedUserData.fullName);
        setPhone(parsedUserData.phone);
        setEmail(parsedUserData.email);
      }
    } catch (e) {
      console.log("Is logged in error : " + e);
    }
  };

  useEffect(() => {
    isLoggedIn();
    if (userInfo) {
      const { name, phone, email } = userInfo;
      setName(name);
      setPhone(phone);
      setEmail(email);
    }
  }, []);

  {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topbar}>
          <BackButton component="Home" />
          <Text style={styles.title}>Datos Personales</Text>
          <View>
            <Text style={styles.hidden}>aaaaa</Text>
          </View>
        </View>

        <View style={styles.ppContainer}>
          <View style={styles.header}>
            <Image
              source={
                userInfo
                  ? { uri: userInfo.img_avatar }
                  : require("../icons/profilepicture.png")
              }
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.name}>
              {userInfo ? userInfo.fullName : "Camilo Vargas"}
            </Text>
            <Text style={styles.profession}>
              {userInfo && userInfo.position === "fullstack"
                ? "Full-Stack Developer"
                : "Software Developer"}
            </Text>
          </View>

          <View style={styles.tab}>
            <View style={styles.tabinfo}>
              <Text style={styles.tabText}>
                Teléfono: {userInfo ? userInfo.phone : ""}
              </Text>
            </View>
          </View>

          <View style={styles.tab}>
            <View style={styles.tabinfo}>
              <Text style={styles.tabText}>
                Email: {userInfo ? userInfo.email : ""}
              </Text>
            </View>
          </View>
        </View>

        <PrimaryButton
          text="Editar datos"
          handler={() => setIsModalVisible(true)}
        />

        {/*                              // MODAL               */}

        <Modal
          visible={isModalVisible}
          animationType="slide"
          style={styles.modalContainer}
        >
          <Text style={styles.title}>Editar Datos</Text>
          <View style={styles.inputSection}>
            <Text style={styles.titlesection}>Nombre:</Text>

            <View
              style={[
                styles.inputContainer,
                { borderColor: isFocused ? colors.primary : "transparent" },
              ]}
            >
              <TextInput
                placeholder={name}
                value={name}
                onChangeText={(value) => setName(value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
            <Text style={styles.titlesection}>Teléfono</Text>

            <View
              style={[
                styles.inputContainer,
                { borderColor: isFocused2 ? colors.primary : "transparent" },
              ]}
            >
              <TextInput
                placeholder={phone}
                value={phone}
                onChangeText={(value) => setPhone(value)}
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
              />
            </View>
            <Text style={styles.titlesection}>Email</Text>

            <View
              style={[
                styles.inputContainer,
                { borderColor: isFocused3 ? colors.primary : "transparent" },
              ]}
            >
              <TextInput
                placeholder={email}
                value={email}
                onChangeText={(value) => setEmail(value)}
                onFocus={() => setIsFocused3(true)}
                onBlur={() => setIsFocused3(false)}
              />
            </View>
            <PrimaryButton
              text="Guardar cambios"
              handler={(e) => handleSave(e)}
            />
            <SecondaryButton
              text="Cancelar"
              handler={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
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
    color: colors.primary,
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

  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "rgba(117, 101, 123, 0.26)",
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  tabinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabText: {
    fontSize: 16,
    width: "90%",
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - 25,
    height: 45,
    backgroundColor: "#fff",
    // paddingStart: 20,
    backgroundColor: colors.input_background,
    marginVertical: 15,
  },
  titlesection: {
    fontSize: 18,
    fontWeight: "700",
  },
  inputSection: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
  modalContainer: {
    marginTop: 20,
  },
  hidden: {
    color: "white",
  },
});

export default DatosPersonales;
