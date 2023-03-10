import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ModalReactions from "../../ModalReactions/ModalReactions";
import ModalComment from "./ModalComment/ModalComment";
import { useCommentInput } from "../../../hooks/useCommentInput";
import { useSelector } from "react-redux";
import icons from "../../../utils/icons";

export default function Comments({ data, isModalVisible, setIsModalVisible }) {
  const state = useSelector((state) => state.login.user);
  let searchReaction = (data) => {
    let reaction = undefined;
    reaction = data.megusta.find((c) => c.user === state._id);
    if (reaction != undefined) {
      return "megusta";
    }
    reaction = data.meinteresa.find((c) => c.user === state._id);
    if (reaction != undefined) {
      return "meinteresa";
    }
    reaction = data.apoyar.find((c) => c.user === state._id);
    if (reaction != undefined) {
      return "apoyar";
    }
    reaction = data.hacergracia.find((c) => c.user === state._id);
    if (reaction != undefined) {
      return "hacergracia";
    }
  };
  const [Show, setShow] = useState(false);
  let { Focus, setFocus } = useCommentInput();
  const [Reaction, setReaction] = useState();
  // const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setReaction(searchReaction(data));
  }, []);
  return (
    <View style={styles.ActionPostContain}>
      <TouchableWithoutFeedback
        onPress={() => setShow(!Show)}
        onPressOut={() => setShow(!Show)}
      >
        <View style={[styles.ActionPost, styles.borderRight]}>
          <ModalReactions
            status={Show}
            setShow={setShow}
            Show={Show}
            setReaction={setReaction}
            reaction={Reaction}
            idPost={data.id}
            token={state.token}
          />
          {!Reaction && (
            <>
              <MaterialIcons name="insert-emoticon" size={24} color="black" />
              <Text style={styles.descriptionComment}>Reaccionar</Text>
            </>
          )}
          {Reaction === "megusta" && (
            <>
              <Image
                source={icons.heart}
                style={{ width: 25, height: 25, marginEnd: 10 }}
              />
              <Text style={[styles.descriptionComment, styles.select]}>
                Me Gusta
              </Text>
            </>
          )}
          {Reaction === "meinteresa" && (
            <>
              <Image
                source={icons.thumbsUp}
                style={{ width: 25, height: 25, marginEnd: 10 }}
              />
              <Text style={[styles.descriptionComment, styles.select]}>
                Me Interesa
              </Text>
            </>
          )}
          {Reaction === "apoyar" && (
            <>
              <Image
                source={icons.claping}
                style={{ width: 25, height: 25, marginEnd: 10 }}
              />
              <Text style={[styles.descriptionComment, styles.select]}>
                Apoyar
              </Text>
            </>
          )}
          {Reaction === "hacergracia" && (
            <>
              <Image
                source={icons.smile}
                style={{ width: 25, height: 25, marginEnd: 10 }}
              />
              <Text style={[styles.descriptionComment, styles.select]}>
                Me divierte
              </Text>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={[styles.ActionPost, styles.borderRight]}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={24}
            color="black"
          />
          <Text style={styles.descriptionComment}>Comentar</Text>
        </View>
      </TouchableWithoutFeedback>
      <ModalComment
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        idPost={data.id}
        user={state}
        count={data.countComments}
        list={data.comments}
      />
      <TouchableWithoutFeedback>
        <View style={styles.ActionPost}>
          <Feather name="send" size={24} color="black" />
          <Text style={styles.descriptionComment}>Enviar</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
