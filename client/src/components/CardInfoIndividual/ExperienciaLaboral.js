import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  editPersonalInfo,
} from "../../redux/actions/personalActions";
import { Cambiador } from "../../redux/actions/actions";
import { Popup } from "react-native-popup-confirm-toast";
import { colors } from "../../constants";
import { styles } from "./style";

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
  }, []);
  const activador = useSelector((state) => state.login.variable);

  const handleDelete = (id) => {
    Popup.show({
      type: "confirm",
      title: "Se borrara permanentemente",
      textBody: "Esta acción no se puede deshacer, ¿desea continuar?",
      buttonText: "Si, borrar",
      confirmText: "Cancelar",
      okButtonStyle: { backgroundColor: colors.primary },
      callback: () => {
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
        )
          .then(() => dispatch(Cambiador(!activador)))
          .catch((error) => console.log(error));
        Popup.hide();
      },
      cancelCallback: () => {
        Popup.hide();
      },
    });
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
          <Text style={styles.dates}>
            {yearIn} - {current ? "Actualidad" : yearOut}
          </Text>
         {location && <Text style={styles.secondaryData}>{location}</Text>}
          <View style={styles.descriptionWrapper}>
            <Text style={styles.title}>{jobTitle}</Text>
            <View style={styles.institutionWrapper}>
              <Text style={styles.primaryData}>{company} - </Text>
              <Text style={styles.secondaryData}>{jobType}</Text>
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.iconsWrappers}>
          <AntDesign
            name="delete"
            size={24}
            style={styles.icono}
            onPress={() => handleDelete(_id)}
          />
          <View style={styles.separador}></View>
          <Feather
            name="edit-3"
            size={22}
            style={styles.icono}
            onPress={() =>
              navigation.navigate("AddExperience", {
                jobTitle,
                jobType,
                company,
                location,
                yearIn,
                yearOut,
                description,
                current,
                _id,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default CardIndividualInfo;
