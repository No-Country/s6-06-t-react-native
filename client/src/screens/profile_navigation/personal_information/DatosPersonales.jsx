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
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";
import { useDispatch } from "react-redux";
import {
  editPersonalInfo,
  getUserData,
} from "../../../redux/actions/personalActions";
import { colors } from "../../../constants";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const DatosPersonales = () => {
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo)
  const [name, setName] = useState("");
  const [area, setArea] = useState("+54");
  const [pais, setPais] = useState("Argentina");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    const stringDate = selectedDate.toString().split(" ");
    setDate(`${stringDate[2]} - ${stringDate[1]} - ${stringDate[3]}`);
  };
  const showDatepicker = (e) => {
    DateTimePickerAndroid.open({
      value: new Date(),
      mode: "date",
      onChange,
    });
  };

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
  console.log(phone)
  {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topcont}>
          <View style={styles.topbar}>
            <BackButton component="Home" />
            <Text style={styles.title}>Información Personal</Text>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.titlesection}>Nombre y apellido:</Text>
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

          <Text style={styles.titlesection}>Fecha de nacimiento:</Text>
          <TouchableOpacity
            onPress={showDatepicker}
            style={styles.inputContainer}
          >
            {date ? (
              <Text> {date}</Text>
            ) : (
              <Text style={styles.placeholder}>
                Selecciona tu fecha de nacimiento
              </Text>
            )}
            <Fontisto name="date" size={20} />
          </TouchableOpacity>

          <Text style={styles.titlesection}>Celular</Text>

          <View
            style={[
              styles.numberContainer,
              { borderColor: isFocused2 ? colors.primary : "transparent" },
            ]}
          >
            <View style={styles.pickerCont}>
              <Picker
                style={styles.area}
                onValueChange={(itemValue, itemIndex) => {
                  setArea(itemValue);
                }}
              >
                <Picker.Item
                  label={area ? area : "Área"}
                  value={null}
                  enabled={false}
                />
                <Picker.Item label="+54" value="+54" />
                <Picker.Item label="+591" value="+591" />
                <Picker.Item label="+55" value="+55" />
                <Picker.Item label="+56" value="+56" />
                <Picker.Item label="+57" value="+57" />
                <Picker.Item label="+593" value="+593" />
                <Picker.Item label="+52" value="+52" />
                <Picker.Item label="+51" value="+51" />
              </Picker>
            </View>
            <View style={styles.number}>
              <TextInput
                placeholder={`${phone}`}
                value={phone}
                onChangeText={(value) => setPhone(value)}
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
              />
            </View>
          </View>
          <Text style={styles.titlesection}>Correo electrónico</Text>

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

          <Text style={styles.titlesection}>País</Text>
          <View style={styles.paisCont}>
            <Picker
              style={styles.paisPick}
              onValueChange={(itemValue, itemIndex) => {
                setPais(itemValue);
              }}
            >
              <Picker.Item
                label={pais ? pais : "Área"}
                value={null}
                enabled={false}
              />
              <Picker.Item label="Argentina" value="Argentina" />
              <Picker.Item label="Bolivia" value="Bolivia" />
              <Picker.Item label="Brasil" value="Brasil" />
              <Picker.Item label="Chile" value="Chile" />
              <Picker.Item label="Colombia" value="Colombia" />
              <Picker.Item label="Ecuador" value="Ecuador" />
              <Picker.Item label="México" value="México" />
              <Picker.Item label="Perú" value="Perú" />
            </Picker>
          </View>
          <Text style={styles.titlesection}>LinkedIn</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused4 ? colors.primary : "transparent" },
            ]}
          >
            <TextInput
              placeholder={linkedin}
              value={linkedin}
              onChangeText={(value) => setLinkedIn(value)}
              onFocus={() => setIsFocused4(true)}
              onBlur={() => setIsFocused4(false)}
            />
          </View>
          <Text style={styles.titlesection}>Portfolio</Text>
          <View
            style={[
              styles.inputContainer,
              { borderColor: isFocused5 ? colors.primary : "transparent" },
            ]}
          >
            <TextInput
              placeholder={portfolio}
              value={portfolio}
              onChangeText={(value) => setPortfolio(value)}
              onFocus={() => setIsFocused5(true)}
              onBlur={() => setIsFocused5(false)}
            />
          </View>
        </View>

        <PrimaryButton text="Guardar" />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
  },
  line: {
    width: "100%",
    backgroundColor: colors.input_background,
    height: 10,
    marginVertical: 5,
  },
  topcont: {
    display: "flex",
    flexDirection: "column",
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    left: -30,
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
    backgroundColor: colors.input_background,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  titlesection: {
    fontSize: 15,
    fontWeight: "700",
  },
  inputSection: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    width: "100%",
    borderRadius: 10,
  },
  pickerCont: {
    height: 45,
    backgroundColor: colors.input_background,
    borderRadius: 10,
    justifyContent: "center",
  },
  area: {
    width: Dimensions.get("window").width - 270,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  number: {
    borderRadius: 10,
    width: Dimensions.get("window").width - 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.input_background,
  },
  paisCont: {
    height: 45,
    backgroundColor: colors.input_background,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default DatosPersonales;
