import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import TopBar  from "../profilecomps/TopBar";
import ProfilePicture  from "../profilecomps/ProfilePicture";
import LogOut from "../profilecomps/LogOut";
import Tabs from "../profilecomps/Tabs";
const Perfil = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TopBar />
      <ScrollView style={styles.container}>
      <ProfilePicture />
      <Tabs />
      <LogOut />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
});

export default Perfil;
