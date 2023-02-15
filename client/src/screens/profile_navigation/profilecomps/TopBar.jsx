import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../../components/BackButton";

const Profile = () => {
  return (
    <View style={styles.Topcontainer}>
      <BackButton />
      {/* <View style={styles.backButton} >
                <AntDesign name="left" size={20} color="black" onPress={() => navigation.goBack()} />
            </View> */}
      <Text style={styles.tittle}>Perfil</Text>
      <View>
        <Text style={styles.hidden}>aaaaa</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Topcontainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  tittle: {
    fontSize: 27,
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "#e0e0e0",
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  hidden: {
    color: "white",
  },
});

export default Profile;
