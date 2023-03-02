import { ScrollView, Text, View } from "react-native";
import ButtonRegistro from "../../../components/buttonRegistro/Index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import StepsRegister from "../../../components/stepsRegister/index.js";
import { styles } from "./style.js";
import { useNavigation } from "@react-navigation/native";

const SignUpStepThree = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.blackContainer}>
      <View style={styles.whiteContainer}>
        <ButtonRegistro onPress={() => navigation.goBack()} />
        <View style={styles.stepsContainer}>
          <StepsRegister
            number="1"
            active={true}
            description="Datos personales"
          />
          <StepsRegister
            number="2"
            active={true}
            description="Perfil profesional"
          />
          <StepsRegister
            number="3"
            active={true}
            description="Confirmación vía email"
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.h2}>¡Casi Terminamos!</Text>
          <Text style={styles.p}>
            En instantes recibirás un correo electrónico con un link de
            confirmación para terminar el proceso de registro.
          </Text>
          <Text style={styles.spam}>
            *No olvides chequear tu correo no deseado.
          </Text>
          <View style={styles.confirmation}>
            <Text style={styles.email}>
              ¿No recibiste el correo electrónico de confirmación?
            </Text>
            <Text style={styles.click}>Hacé click aqui</Text>
          </View>
          <PrimaryButton
            text="Siguiente"
            handler={() => {
              navigation.navigate("LogIn");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpStepThree;
