import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
} from "react-native";
import PostDayWrapper from "./PostDayWrapper";

const ScrollViewPost = ({ post, token, getPost, load, setList }) => {
  const [group, setgroup] = useState();
  const [refreshBool, setrefreshBool] = useState(false);
  let refresh = async () => {
    setrefreshBool(!refreshBool);
    await getPost(`/job-offer/all`, token, setList);
    setrefreshBool(false);
  };
  let GroupByDatePost = (post) => {
    let dates = [];
    post.forEach((p) => {
      let d = new Date(p.updatedAt);
      dates.push(d.toDateString());
    });
    dates = new Set(dates);
    dates = [...dates];

    dates.forEach((dat, i) => {
      dates[i] = {
        date: dat,
        posts: [],
      };
      post.forEach((p, j) => {
        if (new Date(p.updatedAt).toDateString() === dat) {
          dates[i].posts.push(p);
        }
      });
    });
    setgroup(dates);
  };
  useEffect(() => {
    GroupByDatePost(post);
  }, [post]);

  return (
    <>
      <FlatList
        data={group}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(group, i) => String(i)}
        renderItem={({ item }) => <PostDayWrapper group={item} />}
        inverted={true}
        refreshing={refreshBool}
        onRefresh={refresh}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          load ? (
            <ActivityIndicator size="large" color="#AEAEAE" />
          ) : (
            <View style={{ height: 100 }}></View>
          )
        }
      />
    </>
  );
};

export default ScrollViewPost;
