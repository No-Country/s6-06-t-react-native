import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { getUserData } from "../../../redux/actions/personalActions";
import { useSelector } from "react-redux";
import { Root } from "react-native-popup-confirm-toast";
import GoBackArrow from "../../../components/goBackArrow";
import CardIndividualInfo from "../../../components/CardProfesionalInfo/ExperienciaLaboral";

const ListaInfoLaboral = () => {

  const [userInfo, setUserInfo] = useState(null);
  const activador = useSelector((state) => state.login.variable);

  useEffect(() => {
    getUserData(setUserInfo);
  }, [activador]);

  const work = userInfo?.workExperience;

  return (
    <Root>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.secondaryContainer}>
          <GoBackArrow/>
        </View>
        <View style={styles.line}></View>

        <View style={styles.secondaryContainer}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.titleList}>Experiencia laboral</Text>
            <Ionicons name="add" size={30} color={colors.primary} />
          </View>
          {work?.map((data) => {
            return <CardIndividualInfo key={data._id} {...data} />;
          })}
        </View>
      </ScrollView>
    </Root>
  );
};

export default ListaInfoLaboral;
