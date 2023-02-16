import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../../../components/TopBar";
import ProgressCircle from "./ProgressCircle";
import Educacion from "./componentes/Educacion";
import ExperienciaLaboral from "./componentes/ExperienciaLaboral";
import Idiomas from "./componentes/Idiomas";
import Herramientas from "./componentes/Herramientas";
import SobreMi from "./componentes/SobreMi";





const PerfilProfesional = () => {

  const [progress, setProgress] = useState(100);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <TopBar tabname="Perfil Profesional" navigateTo="Profile" />
    <ScrollView>

      <View style={styles.ppContainer}>
          <View>
            <Image
              source={require("../../../../assets/Face.png")}
              style={{ width: 100, height: 100 }}
            />
            <TouchableOpacity style={styles.ppButton}>
              <Feather name="edit" size={20} color="blue" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Camilo Vargas</Text>
          <Text style={styles.profession}> Software Developer</Text>
        </View>
            {/* Progress Circle */}
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

        {/* Disponibilidad */}
        <View style={styles.tab}>
        <View style={{flexDirection: "row"}}>
          <Text style={{ fontSize: 14, fontWeight: "500", }}>
            Disponibilidad Horaria
          </Text>
          </View>
          <View style={{flexDirection: "row", justifyContent:"space-between"}}>
          <Text style={{ fontSize: 12, }}>Part-Time (12 a 17HS)</Text>
          <AntDesign name="edit" size={20} color="black" />
          </View>
        </View>

        <View style={styles.tab}>
          <View style={{flexDirection: "row", justifyContent:"center"}}>
          <Text style={{ fontSize: 14, fontWeight: "500", }}>
            Area Laboral de Interes
          </Text>
          {/* middle bar separation */}
          
          </View>
          <View style={{flexDirection: "row", justifyContent:"space-between", width: "50%",}}>
          <Text style={{ fontSize: 12, }}>Diseno</Text>
          <AntDesign name="edit" size={20} color="black" />
          </View>
        </View>

        <View style={styles.infoTabs}>
          <SobreMi />
          <ExperienciaLaboral />
          <Educacion />
          <Herramientas />
          <Idiomas />
        </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default PerfilProfesional;
