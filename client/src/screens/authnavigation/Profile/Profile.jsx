import React from "react";
import { View, Text, StyleSheet} from "react-native";
import LogOut from "./profilecomps/LogOut";
import ProfilePicture from "./profilecomps/ProfilePicture";
import Tabs from "./profilecomps/Tabs";
import TopBar from "./profilecomps/TopBar";



const Profile = () => {

    return (
        <View style={styles.container}>     
        <TopBar />
        <ProfilePicture/>
        <Tabs />
        <LogOut/>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    tittle: {
        fontSize: 27,
        fontWeight: "bold",
    },
    backButton: {
        // roudnded button grey color
        backgroundColor: "#e0e0e0",
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",

    },
    backButton1: {
        fontSize: 20,
        color: "#000",
    },
    });

    export default Profile;