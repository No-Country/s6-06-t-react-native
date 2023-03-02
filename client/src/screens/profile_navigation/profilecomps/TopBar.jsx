import { View, Text, StyleSheet } from "react-native";
import BackButton from "../../../components/BackButton";

const TopBar = () => {
  return (
    <View style={styles.Topcontainer}>
      <BackButton />
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

export default TopBar;
