import { View, Text, Image, TouchableOpacity } from "react-native";
import noPostulaciones from "../../assets/noPostulaciones.png";
import { useNavigation } from "@react-navigation/native";

const NoVacantes = ({ styles, rol }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.bodyMain}>
        <Image source={noPostulaciones} />
        <Text style={styles.bodyMainText}>
          Aún no tenemos vacantes para {rol}
        </Text>
        <Text style={styles.novedadesNoJobs}>
          ¡Pronto tendremos novedades para vos!
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("GeneralChannel")}>
        <Text style={styles.textBackCanal}>Regresar al Canal General</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NoVacantes;
