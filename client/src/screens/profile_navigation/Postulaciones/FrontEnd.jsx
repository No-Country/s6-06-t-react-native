import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import BackButton from "../../../components/BackButton";
import frontEnd1 from "../../../../assets/icons-applications/e-frontEnd/empresaIcon.png";

import { useNavigation } from "@react-navigation/native";
export default FrontEnd = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={{ position: "relative", right: 80 }}>
          <BackButton />
        </View>
        <Text
          style={{
            textAlign: "center",
            position: "relative",
            right: 0,
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          Etapa de aplicación
        </Text>
      </View>

      <View
        style={{
          alignSelf: "center",
          borderWidth: 1.5,
          borderColor: "#DAE1EA",
          borderRadius: 10,
          width: 300,
          height: 300,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Image source={frontEnd1} style={{ marginTop: 10 }} />
          <Text style={{ fontWeight: "600", marginVertical: 10, fontSize: 20 }}>
            Maquetador Front-End
          </Text>
          <Text style={{ color: "#4245E5" }}>Valtech</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 1.5,
            width: 280,
            borderColor: "#DAE1EA",
          }}
        >
          <Text style={{ marginVertical: 10 }}>Montevideo, Uruguay</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                borderColor: "#EAE9E9",
                borderWidth: 1,
                marginHorizontal: 3,
              }}
            >
              <Text>Full-Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "#EAE9E9",
                borderWidth: 1,
                marginHorizontal: 3,
              }}
            >
              <Text>Remoto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ marginTop: 10, marginBottom: 20, fontWeight: "500" }}>
          Estado de tu aplicación
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#EBEBEB",
            width: 280,
            paddingVertical: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#1B9C06" }}>
            Postulación enviada
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#4245E5",
          width: 300,
          position: "absolute",
          bottom: 30,
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 15,
        }}
        onPress={() => navigation.navigate("DirectMessages")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          Enviar mensaje a Valtech
        </Text>
      </TouchableOpacity>
    </View>
  );
};
