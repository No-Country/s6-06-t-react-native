import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Logo from "../../../../assets/sinfronteras.png";
import PrimaryButton from "../../../components/PrimaryButton";
const OnBoarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.capo}>
      <View style={styles.container}>
        <Image source={Logo} style={{ resizeMode: "contain", height: 350 }} />
        <Text style={styles.title}>
          Viví tu primer experiencia IT en un entorno laboral real.
        </Text>
        <Text style={styles.subtitle}>
          Te acercamos a nuevas oportunidades en las mejores compañías.
        </Text>
        <PrimaryButton
          text="Comenzar"
          handler={() => navigation.navigate("LogIn")}
        />
      </View>
    </SafeAreaView>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  capo: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: "95%",
    paddingHorizontal: 30,
    bottom: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 50,

    lineHeight: 30,
  },
  subtitle: {
    color: "#7B7B7B",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
    marginBottom: 30,
  },
});
