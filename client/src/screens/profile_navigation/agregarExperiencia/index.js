import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputComponent from "../../../components/input/index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import { styles } from "./style.js";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { areaLaboral } from "../../../utils/dataAreaLaboral.js";
import InputComponentSelectList from "../../../components/inputSelectList/index.js";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors.js";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const AgregarExperiencia = () => {
  const navigation = useNavigation();

  const schema = yup
    .object({
      jobTitle: yup
        .string()
        .min(5, "Ingresa al menos 5 carácteres.")
        .max(30, "Ingresa como máximo 30 carácteres.")
        .required("Campo requerido."),
      jobType: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      company: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      location: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      yearIn: yup
        .string()
        .max(50, "Ingresa hasta 50 carácteres.")
        .required("Campo requerido."),
      yearOut: yup.string().max(50, "Ingresa hasta 50 carácteres."),
    })
    .required();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnChange = () => {
    setErrorMessage(null);
  };

  const [data, setData] = useState('')
  // console.log(data);
  const onSubmit = (data) => {
    // console.log(data);
    navigation.goBack();
  };
  
  return (
    <ScrollView style={styles.whiteContainer}>
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <EvilIcons name="close" size={30} color={colors.primary} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.header}>Agregar experiencia</Text>
        <Text style={styles.requeridas}>*Filas requeridas</Text>
        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur } }) => (
            <InputComponent
              label="Título*"
              placeholder="Ingresa la posición que ocupas"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              error={errors.jobTitle}
            />
          )}
          name="jobTitle"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Nombre de la empresa"
              placeholder="Por ejemplo: No Country"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.company}
            />
          )}
          name="company"
        />

        <InputComponentSelectList
          label="Tipo de trabajo"
          data={areaLaboral}
          name="jobArea"
          control={control}
          error={errors.jobArea}
          setValue={setValue}
          placeholder="Indica el tipo de contrato"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Ubicación"
              placeholder="Selecciona la ubicación de tu empleo"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.location}
            />
          )}
          name="location"
        />
        {/* <View>
          <GooglePlacesAutocomplete
            placeholder="Selecciona la ubicación de tu empleo."
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setData(data)
              console.log(data, details);
            }}
            // keyboardShouldPersistTaps="never"
            // fetchDetails={true}
            enablePoweredByContainer={false}
            styles={{
              textInput: {
                backgroundColor: colors.input_background,
                borderRadius: 15,
                paddingHorizontal: 15,
                paddingVertical: 16,
                height: "auto",
                fontSize: 17,
                color: colors.grey_placeholder,
              },
            }}
            query={{
              key: "AIzaSyAtOh7oKl9bNbK3E0gSB8xV6wX7JCBUVeE",
              language: "es",
            }}
          />
        </View> */}
        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Fecha de ingreso*"
              placeholder="Selecciona el año de comienzo"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.yearIn}
            />
          )}
          name="yearIn"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Fecha de egreso"
              placeholder="Ingresa el año de finalización"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.yearOut}
            />
          )}
          name="yearOut"
        />

        <PrimaryButton
          text="Guardar"
          width="width: 100%"
          handler={handleSubmit(onSubmit)}
          disabledColor={!isValid}
        />
      </View>
    </ScrollView>
  );
};

export default AgregarExperiencia;
