import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../constants";
import { ObtainHourDate } from "../../../utils/Date";

export default function HeaderCard({ data, date }) {
  let imgAvatar = data
    ? data.img_avatar
    : "../../../screens/profile_navigation/icons/profilepicture.png";
  return (
    <View style={styles.HeaderPost}>
      <View style={{ alignSelf: "center" }}>
        <Image source={{ uri: imgAvatar }} style={[styles.imgUserPost]} />
        {data ? data.isOnline && <View style={styles.Conection}></View> : null}
      </View>
      <View style={styles.TitlePostContain}>
        <View style={styles.TitlePost}>
          <Text style={styles.UserName}>
            {data && data.fullName ? data.fullName : "Full Name"}
          </Text>
          <Text style={styles.HoursPost}>{ObtainHourDate(date)}</Text>
        </View>
        <View>
          <Text style={styles.SubtitlePost}>{`${
            data ? data.position : "Software Developer"
          }`}</Text>
        </View>
      </View>

      <View>
        <Entypo name="dots-three-vertical" size={24} color={colors.facebook} />
      </View>
    </View>
  );
}
