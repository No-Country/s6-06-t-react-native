import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";
import { styles } from "./styles";
import LogoRequerimientos from "../../../../assets/LogoRequerimientos.png";
import no_guardado from "../../../../assets/no_guardado.png";
import guardado from "../../../../assets/guardado.png";
export default function HeaderCard({ data, date }) {

  const [stateSaved, setStateSaved] = useState(false);

  return (
    <View style={styles.HeaderPost}>
      <View style={{ alignSelf: "center" }}>
        <Image source={LogoRequerimientos} style={[styles.imgUserPost]} />
        {data ? data.isOnline && <View style={styles.Conection}></View> : null}
      </View>

      <View style={styles.TitlePostContain}>
        <View style={styles.TitlePost}>
          <Text style={styles.UserName}> SIN FRONTERAS</Text>
        </View>
        <View style={styles.ViewSubtitlePost}>
          <Text style={styles.SubtitlePost}>@CANAL</Text>
        </View>
      </View>

      <View>
        {!stateSaved ? (
          <TouchableOpacity onPress={() => setStateSaved((e) => !e)}>
            <Image source={no_guardado} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setStateSaved((e) => !e)}>
            <Image source={guardado} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
