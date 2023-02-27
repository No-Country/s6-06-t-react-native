import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./style";
import { Feather, MaterialIcons } from "@expo/vector-icons";
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
      <Feather name="edit-3" size={22} />
      <MaterialIcons
        name="delete-outline"
        size={24}
        color="black"
        onPress={() => handleDelete(_id)}
      />
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Nombre de la compania</Text>
        <Text style={styles.info}>{company}</Text>
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Puesto</Text>
        <Text style={styles.info}>{jobTitle}</Text>
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Tipo de contrato</Text>
        <Text style={styles.info}>{jobType}</Text>
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Año de inicio</Text>
        <Text style={styles.info}>{yearIn}</Text>
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Año de salida</Text>
        {current ? (
          <Text style={styles.info}>Todavía trabajo aquí</Text>
        ) : (
          <Text style={styles.info}>{yearOut}</Text>
        )}
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Descripción del puesto</Text>
        {description ? (
          <Text style={styles.info}>{description}</Text>
        ) : (
          <Text style={styles.info}> No agregaste ninguna</Text>
        )}
      </View>
      <View style={styles.wrapperBlockData}>
        <Text style={styles.titleData}>Ubicación</Text>
        <Text style={styles.info}>{location}</Text>
      </View>
    </View>
  );
};

export default CardIndividualInfo;
