import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ButtonRegistro from "../../components/buttonRegistro/Index.js";
import InputComponent from "../../components/input/index.js";
import InputMobileNumber from "../../components/inputMobileNumber/index.js";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import StepsRegister from "../../components/stepsRegister/index.js";

const Registro = () => {
  return (
    <ScrollView style={styles.blackContainer}>
      <View style={styles.whiteContainer}>
        <ButtonRegistro/>
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
          <PrimaryButton text="Siguiente" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Registro;
