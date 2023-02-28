import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoBackArrow from "./goBackArrow";

const Profile = ({ tabname }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.Topcontainer}>
      <GoBackArrow/>
      <Text style={styles.title}>{tabname}</Text>
    </View>
  );
};

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
  },
});

export default Profile;
