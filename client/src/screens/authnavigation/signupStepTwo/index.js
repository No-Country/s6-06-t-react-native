import { ScrollView, View } from "react-native";
import ButtonRegistro from "../../../components/buttonRegistro/Index.js";
import PrimaryButton from "../../../components/PrimaryButton.jsx";
import StepsRegister from "../../../components/stepsRegister/index.js";
import { styles } from "./style.js";
import { useNavigation } from "@react-navigation/native";
import InputComponentSelectList from "../../../components/inputSelectList/index.js";
import { nivelEstudio } from "../../../utils/dataNivelStudio.js";
import { areaLaboral } from "../../../utils/dataAreaLaboral.js";
import { profesion } from "../../../utils/dataProfesion.js";
import { disponibilidad } from "../../../utils/dataDisponibilidad.js";
import { herramientas } from "../../../utils/dataHerramientas.js";

const RegistroStepTwo = () => {
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
            active={false}
            description="Confirmación vía email"
          />
        </View>
        <View style={styles.formContainer}>
          <InputComponentSelectList
            label="Nivel de estudios"
            data={nivelEstudio}
          />
          <InputComponentSelectList label="Área laboral" data={areaLaboral} />
          <InputComponentSelectList label="Profesión" data={profesion} />
          <InputComponentSelectList
            label="Disponibilidad horaria"
            data={disponibilidad}
          />
          <InputComponentSelectList
            label="Herramientas utilizadas"
            placeholder="Selecciona máximo 5"
            requerimiento="Selecciona aquellas herramientas que has utilizado y queres mejorar"
            data={herramientas}
          />
          <PrimaryButton text="Siguiente" width="width: 100%" />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistroStepTwo;
