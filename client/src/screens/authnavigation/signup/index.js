import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonRegistro from "../../../components/buttonRegistro/Index.js";
import InputComponent from "../../../components/input/index.js";
import InputMobileNumber from "../../../components/inputMobileNumber/index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import StepsRegister from "../../../components/stepsRegister/index.js";
import { styles } from "./style.js";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Registro = () => {
  const navigation = useNavigation();

  const schema = yup
    .object({
      fullName: yup
        .string()
        .min(5, "Ingresa al menos 5 carácteres ")
        .max(30, "Ingresa como máximo 30 carácteres")
        .required("Campo requerido"),
      email: yup
        .string()
        .email("Ingrese un e-maul válido")
        .required("Campo requerido"),
      phone: yup
        .number()
        .typeError("Por favor ingrese su número")
        .required("Campo requerido"),
      password: yup.string().required("Campo requerido"),
    })
    .required();
  const [errorMessage, setErrorMessage] = useState(null);
  const [phone, setPhone] = useState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    alert(data.phone);
    // navigation.navigate('SignUpStepTwo')
  };

  const handleOnChange = () => {
    setErrorMessage(null);
  };

  const handleOnChangePhone = (num) => {
    setErrorMessage(null);
    setPhone(num)
  };

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
            active={false}
            description="Perfil profesional"
          />
          <StepsRegister
            number="3"
            active={false}
            description="Confirmación vía email"
          />
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            onChange={handleOnChange}
            value={phone}
            render={({ field: { onChange, onBlur } }) => (
              <InputComponent
                label="Nombre y apellido"
                placeholder="Escribí tu nombre y apellido completo"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                error={errors.fullName}
              />
            )}
            name="fullName"
          />
          <Controller
            control={control}
            onChange={handleOnChange}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                label="Correo electrónico"
                placeholder="ejemplo@gmail.com"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors.email}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            onChange={(handleOnChange => handleOnChangePhone([value]))}
            value={phone}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputMobileNumber
                label="Celular"
                placeholder="4564674"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors.phone}
              />
            )}
            name="phone"
          />
          <Text>{phone}</Text>

          <Controller
            control={control}
            onChange={handleOnChange}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                requerimiento="Ingresa una contraseña de mínimo 6 caracteres y contenga 1 mayúscula."
                showPass
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors.password}
              />
            )}
            name="password"
          />

          <InputComponent
            label="Confirmar contraseña"
            placeholder="Ingresa nuevamente tu contraseña"
            requerimiento="Ingresa nuevamente tu contraseña."
            showPass
          />
          <PrimaryButton
            text="Siguiente"
            width="width: 100%"
            handler={handleSubmit(onSubmit)}
            disabled={!errors}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Registro;
