import { ScrollView, View } from "react-native";
import ButtonRegistro from "../../../components/buttonRegistro/Index.js";
import InputComponent from "../../../components/input/index.js";
import InputMobileNumber from "../../../components/inputMobileNumber/index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import StepsRegister from "../../../components/stepsRegister/index.js";
import { styles } from "./style.js";
import { useNavigation } from '@react-navigation/native';

const Registro = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.blackContainer}>
      <View style={styles.whiteContainer}>
        <ButtonRegistro onPress={() => navigation.goBack()}/>
        <View style={styles.stepsContainer}>
          <StepsRegister number="1" active={true} description='Datos personales'/>
          <StepsRegister number="2" active={false} description='Perfil profesional'/>
          <StepsRegister number="3" active={false} description='Confirmación vía email'/>
        </View>
        <View style={styles.formContainer}>
          <InputComponent
            label="Nombre y apellido"
            placeholder="Escribí tu nombre y apellido completo"
          />
          <InputComponent
            label="Correo electrónico"
            placeholder="ejemplo@gmail.com"
          />
          <InputMobileNumber label="Celular" />
          <InputComponent
            label="Contraseña"
            placeholder="Ingresa una contraseña"
            requerimiento="Ingresa una contraseña de mínimo 6 caracteres y contenga 1 mayúscula."
            showPass
          />
          <InputComponent
            label="Confirmar contraseña"
            placeholder="Ingresa nuevamente tu contraseña"
            requerimiento="Ingresa nuevamente tu contraseña."
            showPass
          />
          <PrimaryButton text="Siguiente" width='width: 100%' handler={() => {
            navigation.navigate("SignUpStepTwo");
          }}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registro;
