import React from "react";
import {
  Image,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import icons from "../../utils/icons";
import { styles } from "./styles";
import { useReaction } from "../../hooks/usePost";

const ModalReactions = ({
  status,
  setShow,
  Show,
  setReaction,
  reaction,
  idPost,
  token,
}) => {
  let { addReaction, removeReaction } = useReaction();
  if (!status) {
    return <View></View>;
  }
  let deleteReaction = (type) => {
    let reaction = {
      reaction: type,
    };
    removeReaction(`/reaction/post/${idPost}`, token, reaction);
    setReaction(undefined);
  };
  let createReaction = (type) => {
    let reaction = {
      reaction: type,
    };
    addReaction(`/reaction/post/${idPost}`, token, reaction);
    setReaction(type);
  };

  let typeReaction = (reaction, type) => {
    if (reaction === type) {
      setShow(!Show);
      deleteReaction(type);
      return;
    }
    createReaction(type);
    setShow(!Show);
  };

  return (
    <View style={styles.centeredView}>
      <TouchableWithoutFeedback
        onPressIn={() => typeReaction(reaction, "hacergracia")}
      >
        <Image
          source={icons.smile}
          style={{ width: 25, height: 25, marginEnd: 10 }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => typeReaction(reaction, "megusta")}
      >
        <Image
          source={icons.heart}
          style={{ width: 25, height: 25, marginEnd: 10 }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => typeReaction(reaction, "apoyar")}
      >
        <Image
          source={icons.claping}
          style={{ width: 25, height: 25, marginEnd: 10 }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => typeReaction(reaction, "megusta")}
      >
        <Image
          source={icons.party}
          style={{ width: 25, height: 25, marginEnd: 10 }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => typeReaction(reaction, "meinteresa")}
      >
        <Image source={icons.thumbsUp} style={{ width: 25, height: 25 }} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ModalReactions;
