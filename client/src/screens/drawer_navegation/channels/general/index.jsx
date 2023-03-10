import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import ScrollViewPost from "../../../../components/home/ScrollViewPost/ScrollViewPost";
import HeaderHome from "../../../../components/home/header/Index";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import CreatePost from "../../../../components/home/CreatePost/CreatePost";
import { usePost } from "../../../../hooks/usePost";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.login.user);
  const [activador, setActivador] = useState(false);
  let Channel = "Canal General";
  let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2";
  let { getPosts } = usePost();
  const [Posts, setPosts] = useState([]);
  if (!state) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  useEffect(() => {
    (async () => {
      await getPosts(`/channel/${idChannelGeneral}`, state.token, setPosts);
    })();
  }, [activador]);
  return (
    <SafeAreaView style={styles.homeContain}>
      <View style={styles.HeaderContain}>
        <HeaderHome Channel={Channel} />
      </View>
      <View style={styles.ScrollContain}>
        <ScrollViewPost
          post={Posts}
          token={state.token}
          getPost={getPosts}
          load={true}
          setList={setPosts}
          activador={activador}
          setActivador={setActivador}
        />
      </View>
      <View>
        <CreatePost
          token={state.token}
          uidChannel={idChannelGeneral}
          activador={activador}
          setActivador={setActivador}
          post={Posts}
          setPosts={setPosts}
          user={state}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
