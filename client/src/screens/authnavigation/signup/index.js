import { useState } from "react";
import { ScrollView, View } from "react-native";
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
        .min(5, "Ingresa al menos 5 carácteres.")
        .max(30, "Ingresa como máximo 30 carácteres.")
        .required("Campo requerido."),
      email: yup
        .string()
        .email("Ingrese un e-mail válido.")
        .max(50, "Ingresa hasta 50 carácteres.")
        .required("Campo requerido."),
      prefix: yup
        .string()
        .matches(/^[0-9 ()+-]+$/, 'Solo números y simcolos "+" y "-"')
        .max(6, "Ingresa hasta 6 carácteres.")
        .required("Campo requerido."),
      phone: yup
        .number()
        .typeError("Por favor ingrese su número.")
        .max(
          999999999999999,
          "Ingresa hasta 15 carácteres, no ingrese espacios."
        )
        .required("Campo requerido"),
      password: yup
        .string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/,
          "Ingresa una contraseña de mínimo 6 caracteres y contenga 1 mayúscula."
        )
        .required("Campo requerido."),
      confirmPass: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "Su contraseña no coincide.")
        .required("Campo requerido."),
    })
    .required();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm(
    { resolver: yupResolver(schema) },
    {
      defaultValues: {
        fullName: "",
        email: "",
        prefix: "",
        phone: "",
        password: "",
        confirmPass: "",
      },
    }
  );

  const onSubmit = (data) => {
    navigation.navigate("SignUpStepTwo", data);
  };

  const handleOnChange = () => {
    setErrorMessage(null);
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

          <InputMobileNumber
            label="Celular"
            placeholderPrefix="EX: +54"
            placeholderPhoneNumber="Cod. Área + teléfono"
            keyboardType="phone-pad"
            control={control}
            errors={errors}
          />

          <Controller
            control={control}
            onChange={handleOnChange}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                requerimiento={
                  !errors.password &&
                  "Ingresa una contraseña de mínimo 6 caracteres y contenga 1 mayúscula."
                }
                showPass
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors.password}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            onChange={handleOnChange}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                abel="Confirmar contraseña"
                placeholder="Ingresa nuevamente tu contraseña"
                requerimiento="Ingresa nuevamente tu contraseña."
                showPass
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                error={errors.confirmPass}
              />
            )}
            name="confirmPass"
          />

          <PrimaryButton
            text="Siguiente"
            width="width: 100%"
            handler={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Registro;
