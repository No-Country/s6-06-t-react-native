import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { AntDesign, Feather } from "@expo/vector-icons";
import { getUserData } from "../../../redux/actions/personalActions";
import defaultImg from "../icons/profilepicture.png";
import { colors } from "../../../constants";
import TopBar from "../../../components/TopBar";
import styles from "./styles";
import ProgressCircle from "./ProgressCircle";
import SobreMi from "./componentes/SobreMi";
import ExperienciaLaboral from "./componentes/ExperienciaLaboral";
import Educacion from "./componentes/Educacion";
import Idiomas from "./componentes/Idiomas";
import Herramientas from "./componentes/Herramientas";
import InformacionRelevante from "./componentes/InformacionRelevante";
import CardInfoProfesional from "../../../components/cardInfoProfesional";
const PerfilProfesional = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [progress, setProgress] = useState(30);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getUserData(setUserInfo);
  }, []);

  const profileImg = userInfo
    ? userInfo.img_avatar
    : "../icons/profilepicture.png";

    return (
    <SafeAreaView style={styles.container}>
      <TopBar tabname="Perfil Profesional" navigateTo="Profile" />
      <ScrollView>
        <View style={styles.ppContainer}>
          <View>
            <Image
              source={{ uri: profileImg }}
              style={{ width: 100, height: 100 }}
            />
            <TouchableOpacity
              style={styles.ppButton}
              onPress={() => setIsModalVisible(true)}
            >
              <Feather name="edit" size={20} color="blue" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <AntDesign name="edit" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.name}>
            {userInfo ? userInfo.fullName : "No hay información."}
          </Text>
          <Text style={styles.profession}>
            {userInfo ? userInfo?.jobArea : "No hay información."}
          </Text>
        </View>
        <View style={styles.progressContainer}>
          <ProgressCircle progress={progress} />

          <View style={styles.Textcontainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                textAlign: "center",
                lineHeight: 30,
              }}
            >
              {progress === 100
                ? "Perfil Completo!"
                : "Perfil Profesional en Progeso"}
            </Text>
            <Text
              style={{
                color: "#888888",
                fontSize: 12,
                textAlign: "center",
                width: 200,
              }}
            >
              {progress === 100
                ? "Estas listo para aplicar!"
                : "Completa tu perfil para obtener más oportunidades"}
            </Text>
          </View>
        </View>

        <View style={styles.tab}>
          <View style={styles.leftTab}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                Disponibilidad horaria
              </Text>
            </View>
            <View style={styles.separadorTab}></View>

            <Text style={styles.datoUser}>
              {userInfo ? userInfo?.availability : "No hay información."}
            </Text>
          </View>
          <AntDesign name="edit" size={20} color={colors.primary} />
        </View>

        <View style={styles.tab}>
          <View style={styles.leftTab}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Área laboral de interés
              </Text>
            </View>
            <View style={styles.separadorTab}></View>

            <Text style={styles.datoUser}>
              {userInfo ? userInfo?.position : "No hay información."}
            </Text>
          </View>
          <AntDesign name="edit" size={20} color={colors.primary} />
        </View>

        <View style={styles.infoTabs}>
          <CardInfoProfesional cardTitle='Experiencia laboral' aniadir='Añadir experiencia laboral'/>
          <SobreMi />
          <ExperienciaLaboral  />
          <Educacion />
          <Herramientas />
          <Idiomas />
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <InformacionRelevante
          setIsModalVisible={setIsModalVisible}
          transparent={true}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default PerfilProfesional;
