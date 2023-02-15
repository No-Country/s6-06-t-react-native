import { ScrollView, View } from "react-native";
import ButtonRegistro from "../../../components/buttonRegistro/Index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import StepsRegister from "../../../components/stepsRegister/index.js";
import { styles } from "./style.js";
import { useNavigation } from "@react-navigation/native";
import InputComponentSelectList from "../../../components/inputSelectList/index.js";
import { nivelEstudio } from "../../../utils/dataNivelStudio.js";
import { areaLaboral } from "../../../utils/dataAreaLaboral.js";
import { dataPuestoLaboral } from "../../../utils/dataPuestoLaboral.js";
import { disponibilidad } from "../../../utils/dataDisponibilidad.js";
import { herramientas } from "../../../utils/dataHerramientas.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMultipleComponentSelectList from "../../../components/inputMultipleSelectList/index.js";

const RegistroStepTwo = () => {
  const navigation = useNavigation();
  const schema = yup
    .object({
      educationalLevel: yup
        .string()
        .typeError("Elige una opción.")
        .required("Campo requerido."),
      jobTitle: yup
        .string()
        .typeError("Elige una opción.")
        .required("Campo requerido."),
      position: yup
        .string()
        .typeError("Elige una opción.")
        .required("Campo requerido."),
      availability: yup
        .string()
        .typeError("Elige una opción.")
        .required("Campo requerido."),
      technologies: yup
        .array()
        .ensure()
        .min(1, "Elige como minimo 1")
        .max(5, "Elige como máximo 5.")
        .required("Campo requerido."),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert(data.educationalLevel);
    navigation.navigate("SignUpStepThree");
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
            active={true}
            description="Perfil profesional"
          />
          <StepsRegister
            number="3"
            active={false}
            description="Confirmación vía email"
          />
        </View>
        <View style={styles.formContainer}>
          <InputComponentSelectList
            label="Nivel de estudios"
            data={nivelEstudio}
            name="educationalLevel"
            control={control}
            error={errors.educationalLevel}
            setValue={setValue}
          />
          <InputComponentSelectList
            label="Área laboral"
            data={areaLaboral}
            name="jobTitle"
            control={control}
            error={errors.jobTitle}
            setValue={setValue}
          />
          <InputComponentSelectList
            label="Profesión"
            data={dataPuestoLaboral}
            name="position"
            control={control}
            error={errors.position}
            setValue={setValue}
            lastList
          />
          <InputComponentSelectList
            label="Disponibilidad horaria"
            data={disponibilidad}
            name="availability"
            control={control}
            error={errors.availability}
            setValue={setValue}
          />
          <InputMultipleComponentSelectList
            label="Herramientas utilizadas"
            placeholder="Selecciona máximo 5"
            requerimiento="Selecciona aquellas herramientas que has utilizado y queres mejorar"
            data={herramientas}
            name="technologies"
            control={control}
            error={errors.technologies}
            setValue={setValue}
            lastList
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

export default RegistroStepTwo;
