import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
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

const CardIndividualEducation = ({
  educationalLevel,
  educationTitle,
  institute,
  educationStatus,
  inCourse,
  year_in,
  year_out,
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
        const estudiosFiltrados = userInfo?.education.filter((edu) => {
          return edu._id !== id;
        });

        dispatch(
          editPersonalInfo(
            {
              education: [...estudiosFiltrados],
            },
            userInfo?.token
          )
        )
          .then(() => dispatch(Cambiador(!activador)))
          .catch((error) => console.warn(error));
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
            source={require("../../../assets/EducationImg.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.wrapperInformacion}>
          <Text style={styles.dates}>
            {year_in} - {inCourse ? "Actualidad" : year_out}
          </Text>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.title}>{educationTitle}</Text>
            <View style={styles.institutionWrapper}>
              <Text style={styles.primaryData}>{educationStatus} - </Text>
              <Text style={styles.secondaryData}>{inCourse}</Text>
            </View>
            <Text style={styles.secondaryData}>{educationalLevel}</Text>
            <Text style={styles.secondaryData}>{institute}</Text>
          </View>
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
              navigation.navigate("AddEducation", {
                educationalLevel,
                educationTitle,
                institute,
                educationStatus,
                inCourse,
                year_in,
                year_out,
                _id,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default CardIndividualEducation;
