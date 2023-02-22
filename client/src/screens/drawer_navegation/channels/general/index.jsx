import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import ScrollViewPost from "../../../../components/home/ScrollViewPost/ScrollViewPost";
import HeaderHome from "../../../../components/home/header/Index";
import { styles } from "./styles";
import { useSelector } from "react-redux";

import CreatePost from "../../../../components/home/CreatePost/CreatePost";
import { reqResApi } from "../../../../config/axiosConfig";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.login.user);
  let Channel= "Canal General"
  let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2";

  const [Posts, setPosts] = useState([]);
  if (!state) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  useEffect(() => {
    ( async ()=> { await getPosts(`/channel/${idChannelGeneral}`, state.token, setPosts)} )()
  }, []);



  let getPosts = async (url, token, setList)=>{
    let response 
    let data = []
    try {
        response = await reqResApi.get( url , {
            headers : {'x-token' : token }
        })
    } catch (error) {
        console.log(error)
    }
    if (response.status === 200) {
      console.log(response)
      data.push(...response.data.data.posts)
      setList(data)
      
    }
  }

  console.log(Posts)
  return (
    <SafeAreaView style={styles.homeContain}>
      <View style={styles.HeaderContain}>
        <HeaderHome Channel={Channel} />
      </View>
      <View style={styles.ScrollContain}>
        <ScrollViewPost post={Posts} token={state.token} getPost={getPosts} load={true} setList={setPosts} />
      </View>
      <View>
        <CreatePost token={state.token} uidChannel={idChannelGeneral}  />
      </View>
    </SafeAreaView>
  );
};

export default Home;
