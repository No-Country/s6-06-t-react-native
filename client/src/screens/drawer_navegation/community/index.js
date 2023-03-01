import React, { useEffect } from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import HeaderHome from "../../../components/home/header/Index";
import { useSelector } from "react-redux";
import ScrollViewPost from "../../../components/home/ScrollViewPost/ScrollViewPost";
import { usePost } from "../../../hooks/usePost";
import WorkInProgress from "../../../components/workInProgress/WorkInProgress";

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
    <SafeAreaView>
      <WorkInProgress color="#6264BC"/>
    </SafeAreaView>
  );
};

export default Community;
