import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getUserData,
  editPersonalInfo,
} from "../../redux/actions/personalActions";

const CardIndividualInfo = ({
  jobTitle,
  jobType,
  company,
  location,
  yearIn,
  yearOut,
  description,
  current,
  _id,
}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserData(setUserInfo);
  }, [userInfo?.workExperience]);

  const handleDelete = (id) => {
    console.log(id);

    const trabajosFiltrados = userInfo?.workExperience.filter((work) => {
      return work._id !== id;
    });

    dispatch(
      editPersonalInfo(
        {
          workExperience: [...trabajosFiltrados],
        },
        userInfo?.token
      )
    ).catch((error) => console.log(error));
  };

  return (
    <View style={styles.containerCard}>
      <View style={styles.wrapperInformation}>
        <View style={styles.wrapperImagen}>
          <Image
            source={require("../../../assets/workExpImg.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.wrapperInformacion}>
          <Text style={styles.workDate}>
            {yearIn} - {current ? "Actualidad" : yearOut}
          </Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.titleWork}>{jobTitle}</Text>
            <View style={styles.companyWrapper}>
              <Text style={styles.companyName}>{location} - </Text>
              <Text style={styles.contract}>{jobType}</Text>
            </View>
          </View>
          <Text style={styles.workDescription}>{description}</Text>
        </View>
        <View style={styles.iconsWrappers}>
          <Feather name="edit-3" size={22} style={styles.icono} />
          <View style={styles.separador}></View>
          <AntDesign
            name="delete"
            size={24}
            style={styles.icono}
            onPress={() => handleDelete(_id)}
          />
        </View>
      </View>
    </View>
  );
};

export default CardIndividualInfo;
