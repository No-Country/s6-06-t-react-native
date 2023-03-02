import React from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { usePost } from "../../../hooks/usePost";
import WorkInProgress from "../../../components/workInProgress/WorkInProgress";

const Community = () => {
  const state = useSelector((state) => state.login.user);
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
      <WorkInProgress color="#6264BC" />
    </SafeAreaView>
  );
};

export default Community;
