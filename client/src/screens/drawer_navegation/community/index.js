import React, { useEffect } from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import HeaderHome from "../../../components/home/header/Index";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import ScrollViewPost from "../../../components/home/ScrollViewPost/ScrollViewPost";
import { usePost } from "../../../hooks/usePost";

const Community = ({ navigation }) => {
  const state = useSelector((state) => state.login.user);
  // console.log(state.token)
  let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2";
  let dataUser = {
    Channel: "Comunidad",
  };
  let { Post } = usePost(`/channel/${idChannelGeneral}`, state.token);
  if (Post?.length === 0) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.homeContain}>
      <View style={styles.HeaderContain}>
        <HeaderHome Channel={dataUser.Channel} />
      </View>
      <View style={styles.ScrollContain}>
        <ScrollViewPost post={Post} />
      </View>
    </SafeAreaView>
  );
};

export default Community;
