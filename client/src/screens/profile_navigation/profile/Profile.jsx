import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, SafeAreaViewComponent, SafeAreaViewBase, ScrollView} from "react-native";
import LogOut from "./profilecomps/LogOut";
import ProfilePicture from "./profilecomps/ProfilePicture";
import Tabs from "./profilecomps/Tabs";
import TopBar from "./profilecomps/TopBar";
import { useNavigation } from "@react-navigation/native";



const Profile = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}> 
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <TopBar />
        <ProfilePicture/>
        <Tabs />
        <LogOut/>
        </ScrollView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    });

    export default Profile;