import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, SafeAreaViewComponent, SafeAreaViewBase} from "react-native";
import LogOut from "./profilecomps/LogOut";
import ProfilePicture from "./profilecomps/ProfilePicture";
import Tabs from "./profilecomps/Tabs";
import TopBar from "./profilecomps/TopBar";



const Profile = () => {

    return (
        <SafeAreaView style={styles.container}> 
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <TopBar />
        <ProfilePicture/>
        <Tabs />
        <LogOut/>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    });

    export default Profile;