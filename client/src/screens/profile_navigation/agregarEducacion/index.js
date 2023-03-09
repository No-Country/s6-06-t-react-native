import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InputComponent from "../../../components/input/index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputComponentSelectList from "../../../components/inputSelectList/index.js";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors.js";
import CheckBox from "expo-checkbox";
import InputTextArea from "../../../components/inputTextArea/Index.js";
import { styles } from "./style.js";
import { estadoEstudio } from "../../../utils/dataEstadoEstudio.js";
import { nivelEstudio } from "../../../utils/dataNivelEstudio.js";

import { useDispatch, useSelector } from "react-redux";
import {
  editPersonalInfo,
  getUserData,
} from "../../../redux/actions/personalActions";
import { Cambiador } from "../../../redux/actions/actions.js";

const AgregarEducacion = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const schema = yup
    .object({
      educationTitle: yup
        .string()
        .min(5, "Ingresa al menos 5 carácteres.")
        .max(30, "Ingresa como máximo 30 carácteres.")
        .required("Campo requerido."),
      educationalLevel: yup.string().required("Campo requerido."),
      institute: yup.string().max(50, "Ingresa hasta 50 carácteres."),
      educationStatus: yup.string().required(),
      year_in: yup
        .string()
        .matches(/\d/, "Ingrese solo números")
        .length(4, "Ingresa el año completo, ejemplo: 2022")
        .required("Campo requerido."),
      year_out: yup
        .string()
        .matches(/\d/, "Ingrese solo números")
        .length(4, "Ingresa el año completo, ejemplo: 2022"),
      inCourse: yup.boolean(),
      description: yup.string().max(120, "Ingresa hasta 120 carácteres."),
    })
    .required();
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      educationTitle: params ? params.educationTitle : "",
      educationalLevel: params ? params.educationalLevel : "",
      institute: params ? params.institute : "",
      educationStatus: params ? params.educationStatus : "",
      year_in: params ? params.year_in : undefined,
      inCourse: params ? params.inCourse : false,
      description: params ? params.description : "",
    },
  });

  const handleOnChange = () => {
    setErrorMessage(null);
  };

  const isEditable = watch("inCourse");

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserData(setUserInfo);
  }, []);

  const activador = useSelector((state) => state.login.variable);

  const onSubmit = (data) => {
    if (params) {
      let updatedEducation = userInfo?.education.map((edu) => {
        if (edu._id === params._id) {
          return {
            id_: data._id,
            educationTitle: data.educationTitle,
            educationTitle: data.educationTitle,
            institute: data.institute,
            educationStatus: data.educationStatus,
            year_in: data.year_in,
            year_out: data.year_out,
            inCourse: data.inCourse,
            description: data.description,
          };
        }
        return edu;
      });
      dispatch(
        editPersonalInfo(
          {
            education: [...updatedEducation],
          },
          userInfo?.token
        )
      )
        .then(() => dispatch(Cambiador(!activador)))
        .then(navigation.goBack)
        .catch((error) => console.warn(error));
    } else {
      dispatch(
        editPersonalInfo(
          {
            education: [...userInfo?.education, data],
          },
          userInfo?.token
        )
      )
        .then(() => dispatch(Cambiador(!activador)))
        .then(navigation.goBack)
        .catch((error) => console.warn(error));
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
          {params ? "Editar" : "Agregar Educación"}
        </Text>
        <Text style={styles.requeridas}>*Filas requeridas</Text>
        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur } }) => (
            <InputComponent
              label="Título*"
              placeholder="Ingresa que estas estudiando"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              error={errors.educationTitle}
              defaultValue={params ? params.educationTitle : ""}
            />
          )}
          name="educationTitle"
        />

        <InputComponentSelectList
          label="Nivel de estudios*"
          data={nivelEstudio}
          name="educationalLevel"
          control={control}
          error={errors.educationalLevel}
          setValue={setValue}
          placeholder="Ejemplo: Autodidacta"
          defaultValue={params ? params.educationalLevel : ""}
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Institución"
              placeholder="Ingresa la institución"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.institute}
              defaultValue={params ? params.institute : ""}
            />
          )}
          name="institute"
        />

        <InputComponentSelectList
          label="Estado de estudio*"
          data={estadoEstudio}
          name="educationStatus"
          control={control}
          error={errors.educationStatus}
          setValue={setValue}
          defaultValue={params ? params.educationStatus : ""}
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Año de ingreso*"
              keyboardType="numeric"
              placeholder="Selecciona el año de comienzo"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.year_in}
              defaultValue={params ? params.year_in : ""}
            />
          )}
          name="year_in"
        />

        <Controller
          control={control}
          onChange={handleOnChange}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent
              label="Año de egreso"
              keyboardType="numeric"
              placeholder="Ingresa el año de finalización"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              error={errors.year_out}
              editable={!isEditable}
              defaultValue={params ? params.year_out : ""}
            />
          )}
          name="year_out"
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
              <Text style={styles.checkboxLabel}>Actualmente asisto</Text>
            </View>
          )}
          name="inCourse"
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

export default AgregarEducacion;
