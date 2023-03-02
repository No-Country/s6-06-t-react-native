import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import BackButton from "../../../components/BackButton";
import designeruxui1 from "../../../../assets/icons-applications/e-UXUI1/empresaIcon.png";
export default Designer1 = () => {
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
          <Image source={designeruxui1} style={{ marginTop: 10 }} />
          <Text style={{ fontWeight: "600", marginVertical: 10, fontSize: 20 }}>
            UX UI Designer
          </Text>
          <Text style={{ color: "#4245E5" }}>Cabify SA</Text>
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
          <Text style={{ marginVertical: 10 }}>Buenos Aires, Argentina</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                borderColor: "#EAE9E9",
                borderWidth: 1,
                marginHorizontal: 3,
              }}
            >
              <Text>Part-Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: "#EAE9E9",
                borderWidth: 1,
                marginHorizontal: 3,
              }}
            >
              <Text>Híbrido</Text>
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
          <Text style={{ textAlign: "center", color: "#4245E5" }}>
            Postulación enviada
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#8C8EDD",
          width: 300,
          position: "absolute",
          bottom: 30,
          alignItems: "center",
          paddingVertical: 15,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          Esperando Respuesta
        </Text>
      </TouchableOpacity>
    </View>
  );
};
