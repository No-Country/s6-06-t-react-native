import { View,Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

const LogOut = () => {
    return (
        <Pressable style={styles.container}>
            <Icon name="log-out-outline" size={30} color="#626A6D" />
            <Text style={styles.txt}>Cerrar sesion</Text>
        </Pressable>
    );
    }

export default LogOut;

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
    },
    txt: {
        fontSize: 15,
        color: "#626A6D",
        marginLeft: 16,
    },
});
