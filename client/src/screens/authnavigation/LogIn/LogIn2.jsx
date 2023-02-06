import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PrimaryButton from "../../../components/PrimaryButton";
import conectedWorld from "../../../../assets/ConnectedWorld.png";
import { useState } from "react";
import LinkedinButton from "../../../components/LinkedinButton";
import { AntDesign } from "@expo/vector-icons";
const LogIn2 = () => {
  const [data, setData] = useState({ password: "", email: "" });
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <View style={styles.main}>
        <Image
          source={conectedWorld}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Fomentamos el trabajo sin fronteras.</Text>
        <Text style={styles.welcome}>¡Bienvenido/a!</Text>
        <View
          style={[
            styles.inputContainer,
            { borderColor: isFocused ? "#4245E5" : "transparent" },
          ]}
        >
          <AntDesign name="mail" size={20} />
          <TextInput
            style={styles.inputText}
            onChangeText={(e) => setData({ ...data, email: e })}
            placeholder={"Ingresa tu correo electrónico"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            { borderColor: isFocused2 ? "#4245E5" : "transparent" },
          ]}
        >
          <AntDesign name="lock" size={20} />

          <TextInput
            onChangeText={(e) => setData({ ...data, password: e })}
            placeholder={"Contraseña"}
            style={styles.inputText}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.forgot}>
          <Text style={{ color: "#4245E5", fontSize: 12 }}>
            Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <PrimaryButton text="Iniciar Sesión" />
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
          <Text style={{ color: "#979797" }}>Ingresar con</Text>
          <View style={styles.line}></View>
        </View>
        <LinkedinButton />
        <View style={styles.register}>
          <Text style={{ fontSize: 12, marginHorizontal: 10 }}>
            Aún no tenés cuenta?
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#4245E5", textDecorationLine: "underline" }}>
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    width: "100%",
    height: "95%",
    top: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    height: 160,
    marginTop: -50,
  },
  title: {
    fontWeight: "500",
    alignSelf: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  welcome: {
    color: "#06087E",
    fontWeight: "700",
    fontSize: 25,
    display: "flex",
    alignSelf: "flex-start",
    marginLeft: 15,
    marginBottom: 15,
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
    backgroundColor: "#EEEEEE",
    marginBottom: 10,
  },
  inputText: { marginLeft: 10 },
  forgot: {
    display: "flex",
    alignSelf: "flex-end",
    marginRight: 15,
    marginBottom: -10,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#979797",
    width: 1,
    marginHorizontal: 15,
  },
  register: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default LogIn2;
