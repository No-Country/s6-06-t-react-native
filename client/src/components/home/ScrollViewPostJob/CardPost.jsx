import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Pinned from "./Pinned";
import HeaderCard from "./HeaderCard";
import Comments from "./Comments";
import { useState } from "react";
import AmountCommentsAndReactions from "./AmountCommentsAndReactions";

export default function CardPost({ data }) {
    let shorDataBody = data && data.description
    ? data.description.length >= 150 && data.description.slice(0, 150)
    : "no description";
  const [short, setShort] = useState(false);
  
  let author = {
    _id: data.id,
    fullName: data.title,
    isOnline: data.active,
    position: data.type,
    img_avatar: "https://res.cloudinary.com/dv2elz7mk/image/upload/v1677369212/nnthghri1e3kv4lu7b13.jpg"
  }
  return (
    <View style={styles.PostCard}>
      {data.important && <Pinned data={author} />}

      <HeaderCard data={data} date={data.updatedAt} />

      <View style={styles.BodyPost}>
        {data.description && data.description.length > 150 ? (
          <Text style={styles.TextBody}>
            {short ? data.BodyPost : shorDataBody + "..."}{" "}
            <Text
              onPress={() => setShort(!short)}
              style={styles.buttonShortPost}
            >
              {short ? "Ocultar" : "Ver mas"}
            </Text>
          </Text>
        ) : (
          <Text style={styles.TextBody}>{data.description ? data.description : 'No description available'}</Text>
        )}
      </View>
      <AmountCommentsAndReactions 
                countComments={data.countComments}
                countCandidates={data.candidates ? data.candidates.length : 0}
        /> 
      <Comments />
    </View>
  );
}


/* 
*/