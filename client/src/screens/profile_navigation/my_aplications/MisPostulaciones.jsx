import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import BackButton from "../../../components/BackButton";

import empresaUXUI from "../../../../assets/icons-applications/empresa-uxui.png";
import empresaUXUI2 from "../../../../assets/icons-applications/empresa-uxui2.png";
import empresaFrontEnd from "../../../../assets/icons-applications/empresa-frontend.png";
import empresaFullStack from "../../../../assets/icons-applications/empresa-fullstack.png";

import botomEnviada from "../../../../assets/icons-applications/botom-enviada.png";

import right from "../../../../assets/icons-applications/rightProfile.png";
import { useNavigation } from "@react-navigation/native";

const MisPostulaciones = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={{ position: "relative", right: 60 }}>
          <BackButton />
        </View>
        <Text
          style={{
            textAlign: "center",
            position: "relative",
            right: 50,
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          Mis Postulaciones
        </Text>
      </View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Designer1");
            }}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.component}>
              <Image source={empresaUXUI} />
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  UX UI DESIGNER
                </Text>
                <Text style={{ marginBottom: 15 }}>Cabify SA</Text>
                <TouchableOpacity
                  source={botomEnviada}
                  style={{
                    position: "relative",
                    right: 0,
                    backgroundColor: "#E3E4FC",
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "#4245E5" }}>
                    ENVIADA
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={right}
                style={{ position: "absolute", top: 40, right: 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FrontEnd");
            }}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.component}>
              <Image source={empresaFrontEnd} />
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Maquetador Front-End
                </Text>
                <Text style={{ marginBottom: 15 }}>Valtech</Text>
                <TouchableOpacity
                  source={botomEnviada}
                  style={{
                    position: "relative",
                    right: 0,
                    backgroundColor: "#E3E4FC",
                    borderRadius: 20,
                    width: 100,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "#1B9C06" }}>
                    ACEPTADA
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={right}
                style={{ position: "absolute", top: 40, right: 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullStack");
            }}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.component}>
              <Image source={empresaFullStack} />
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  Programador Full Stack
                </Text>
                <Text style={{ marginBottom: 15 }}>Accenture</Text>
                <TouchableOpacity
                  source={botomEnviada}
                  style={{
                    position: "relative",
                    right: 0,
                    backgroundColor: "#E3E4FC",
                    borderRadius: 20,
                    width: 120,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#F01212",
                      fontSize: 12,
                    }}
                  >
                    Fuera del proceso
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={right}
                style={{ position: "absolute", top: 40, right: 10 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Designer2");
            }}
            style={{ marginBottom: 10 }}
          >
            <View style={styles.component}>
              <Image source={empresaUXUI2} />
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                  UX UI DESIGNER
                </Text>
                <Text style={{ marginBottom: 15 }}>Healthy US</Text>
                <TouchableOpacity
                  source={botomEnviada}
                  style={{
                    position: "relative",
                    right: 0,
                    backgroundColor: "#E3E4FC",
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ textAlign: "center", color: "#4245E5" }}>
                    ENVIADA
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={right}
                style={{ position: "absolute", top: 40, right: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MisPostulaciones;
