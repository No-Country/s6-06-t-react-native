import { Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/loginActions";

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  return (
    <Pressable style={styles.container} onPress={(e) => handleLogout(e)}>
      <Ionicons name="log-out-outline" size={30} color="#626A6D" />
      <Text style={styles.txt}>Cerrar sesión</Text>
    </Pressable>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginTop: 0,
  },
  txt: {
    fontSize: 15,
    color: "#626A6D",
    marginLeft: 16,
  },
});
