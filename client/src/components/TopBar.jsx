import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Profile = ({ tabname, navigateTo }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.Topcontainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(navigateTo)}>
                <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{tabname}</Text>
        </View>
    );
}
// make title be in the middle of the top bar

const styles = StyleSheet.create({
    Topcontainer: {
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 27,
        fontWeight: "bold",
        alignItems: "center",
        flex: 1,
        textAlign: "center",

    },
    backButton: {
        backgroundColor: "#e0e0e0",
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        left: 25,
    }
});

export default Profile;
