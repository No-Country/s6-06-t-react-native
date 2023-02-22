import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import ScrollViewPost from "../../../../components/home/ScrollViewPost/ScrollViewPost";
import HeaderHome from "../../../../components/home/header/Index";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { usePost } from "../../../../hooks/usePost";
import CreatePost from "../../../../components/home/CreatePost/CreatePost";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.login.user);
  let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2";
  let Channel= "Canal General"
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
        <HeaderHome Channel={Channel} />
      </View>
      <View style={styles.ScrollContain}>
        <ScrollViewPost post={Post} />
      </View>
      <View>
        <CreatePost />
      </View>
    </SafeAreaView>
  );
};

export default Home;
