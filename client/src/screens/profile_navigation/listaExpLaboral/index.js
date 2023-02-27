import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { styles } from "./style";
import CardIndividualInfo from "../../../components/cardIndividualInfoProfesional";
import { useEffect, useState } from "react";
import { getUserData } from "../../../redux/actions/personalActions";
import { useDispatch } from "react-redux";

const ListaInfoLaboral = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserData(setUserInfo);
  }, []);

  const work = userInfo?.workExperience

  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          <EvilIcons name="close" size={30} color={colors.primary} />
        </Text>
      </TouchableOpacity>
      {work.map((data) => {
        return (
          <CardIndividualInfo key={data._id} {...data}/>
        );
      })}
    </ScrollView>
  );
};

export default ListaInfoLaboral;
