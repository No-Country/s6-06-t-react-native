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
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../../../redux/actions/loginActions";
import { useDispatch } from "react-redux";
import { AsyncStorage } from "react-native";
import { colors } from "../../../constants/colors";

const LogIn2 = () => {
  const [data, setData] = useState({ password: "", email: "" });
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let isValid = true;

    if (!data.email) {
      isValid = false;
      alert("Email es un campo requerido.");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      isValid = false;
      alert("Email no válido.");
    }

    if (!data.password) {
      isValid = false;
      alert("Contraseña es un campo requerido.");
    }

    if (isValid) {
      dispatch(loginUser(data));
      navigation.navigate("Transition");
    }
  };

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
            { borderColor: isFocused ? colors.primary : "transparent" },
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
            { borderColor: isFocused2 ? colors.primary : "transparent" },
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
          <Text style={{ color: colors.primary, fontSize: 12 }}>
            Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <PrimaryButton text="Iniciar Sesión" handler={() => handleSubmit()} />
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
            <Text
              style={{ color: colors.primary, textDecorationLine: "underline" }}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
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
    backgroundColor: colors.input_background,
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
