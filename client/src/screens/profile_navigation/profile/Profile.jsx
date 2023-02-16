import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  SafeAreaViewComponent,
  SafeAreaViewBase,
  ScrollView,
} from "react-native";
import TopBar  from "../profilecomps/TopBar";
import ProfilePicture  from "../profilecomps/ProfilePicture";
import LogOut from "../profilecomps/LogOut";
import Tabs from "../profilecomps/Tabs";
const Perfil = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TopBar />
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
