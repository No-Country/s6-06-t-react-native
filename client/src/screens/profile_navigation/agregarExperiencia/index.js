import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputComponent from "../../../components/input/index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import { styles } from "./style.js";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputComponentSelectList from "../../../components/inputSelectList/index.js";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors.js";
import { tipoContrato } from "../../../utils/dataTipoContrato.js";
import CheckBox from "expo-checkbox";
import InputTextArea from "../../../components/inputTextArea/Index.js";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { useDispatch, useSelector } from "react-redux";
import {
  editPersonalInfo,
  getUserData,
} from "../../../redux/actions/personalActions";
import { Cambiador } from "../../../redux/actions/actions.js";

const AgregarExperiencia = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const schema = yup
    .object({
      jobTitle: yup
        .string()
        .max(30, "Ingresa como máximo 30 carácteres.")
        .required("Campo requerido."),
      company: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      jobType: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      location: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      current: yup.boolean(),
      yearIn: yup
        .string()
        .matches(/\d/, "Ingrese solo números")
        .max(4, "Ingresa hasta 4 carácteres.")
        .required("Campo requerido."),
      yearOut: yup
        .string()
        .matches(/\d/, "Ingrese solo números")
        .max(4, "Ingresa hasta 4 carácteres."),
      description: yup.string().max(120, "Ingresa hasta 120 carácteres."),
    })
    .required();
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      jobTitle: params ? params.jobTitle : "",
      company: params ? params.company : "",
      jobType: params ? params.jobType : "",
      location: params ? params.location : "",
      current: params ? params.current : false,
      yearIn: params ? params.yearIn : undefined,
      description: params ? params.description : "",
    },
  });
  const handleOnChange = () => {
    setErrorMessage(null);
  };

  const isEditable = watch("current");

  const [data, setData] = useState("");

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserData(setUserInfo);
  }, []);

  const activador = useSelector((state) => state.login.variable);

  const onSubmit = (data) => {
    if (params) {
      let updatedExperiences = userInfo?.workExperience.map((work) => {
        if (work._id === params._id) {
          return {
            jobTitle: data.jobTitle,
            company: data.company,
            jobType: data.jobType,
            location: data.location,
            current: data.current,
            yearIn: data.yearIn,
            yearOut: data.yearOut,
            description: data.description,
          };
        }
        return work;
      });

      dispatch(
        editPersonalInfo(
          {
            workExperience: [...updatedExperiences],
          },
          userInfo?.token
        )
      )
        .then(() => dispatch(Cambiador(!activador)))
        .then(navigation.goBack())
        .catch((error) => console.log(error));
    } else {
      dispatch(
        editPersonalInfo(
          {
            workExperience: [...userInfo?.workExperience, data],
          },
          userInfo?.token
        )
      )
        .then(() => dispatch(Cambiador(!activador)))
        .then(navigation.goBack())
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.whiteContainer}>
      <ScrollView style={styles.formContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <EvilIcons name="close" size={30} color={colors.primary} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.header}>
          {params ? "Editar" : "Agregar experiencia"}
        </Text>
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
              defaultValue={params ? params.jobTitle : ""}
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
              defaultValue={params ? params.company : ""}
            />
          )}
          name="company"
        />

        <InputComponentSelectList
          label="Tipo de trabajo"
          data={tipoContrato}
          name="jobType"
          control={control}
          error={errors.jobType}
          setValue={setValue}
          placeholder="Indica el tipo de contrato"
          defaultValue={params ? params.jobType : ""}
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
              defaultValue={params ? params.location : ""}
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
              keyboardType="numeric"
              placeholder="Selecciona el año de comienzo"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.yearIn}
              defaultValue={params ? params.yearIn : ""}
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
              keyboardType="numeric"
              placeholder="Ingresa el año de finalización"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.yearOut}
              editable={!isEditable}
              defaultValue={params ? params.yearOut : ""}
            />
          )}
          name="yearOut"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <View style={styles.checkboxWrapper}>
              <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={value}
                onValueChange={(value) => onChange(value)}
                color={colors.primary}
              />
              <Text style={styles.checkboxLabel}>
                Actualmente trabajo en este rol
              </Text>
            </View>
          )}
          name="current"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTextArea
              label="Descripción"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.description}
              requerimiento="- Máximo 120 carácteres"
              defaultValue={params ? params.description : ""}
            />
          )}
          name="description"
        />
      </ScrollView>
      <View style={styles.fixedButton}>
        <PrimaryButton
          text="Guardar"
          width="width: 100%"
          handler={handleSubmit(onSubmit)}
          disabledColor={!isValid}
        />
      </View>
    </View>
  );
};

export default AgregarExperiencia;
