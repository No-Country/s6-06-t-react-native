import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../constants";
import { styles } from "./style";

const CardInfoProfesional = ({
  routeToAdd,
  routeToSeeAll,
  cardTitle,
  aniadir,
  workExp,
  education,
  dataToSee
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} onPress={() => navigation.navigate(routeToAdd)}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Text style={styles.titleCard}>{cardTitle}</Text>
        <View style={styles.iconWrapper}>
          {(workExp || education) && (
            <TouchableOpacity onPress={() => navigation.navigate(routeToAdd)}>
              <Ionicons name="add" size={30} color={colors.primary} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
          onPress={() => navigation.navigate(routeToSeeAll, dataToSee)}
          >
            <Feather
              name="edit-3"
              size={22}
              color={colors.primary}
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {(workExp?.length === 0) && (
        <TouchableOpacity
          style={styles.txtcontainer}
          onPress={() => navigation.navigate(routeToAdd)}
        >
          <View style={styles.aniadirWrapper}>
            <Text style={styles.text}>{aniadir}</Text>
            <Text style={styles.iconoAdd}>+</Text>
          </View>
        </TouchableOpacity>
      )}
      {workExp &&
        workExp.map((work) => {
          return (
            <View style={styles.wrapperInformation} key={work._id}>
              <View style={styles.wrapperImagen}>
                <Image
                  source={require("../../../assets/workExpImg.png")}
                  style={styles.img}
                />
              </View>
              <View style={styles.wrapperInformacion}>
                <Text style={styles.workDate}>
                  {work.yearIn} - {work.current ? "Actualidad" : work.yearOut}
                </Text>
                <View style={styles.descriptionWrapper}>
                  <Text style={styles.titleWork}>{work.jobTitle}</Text>
                  <View style={styles.companyWrapper}>
                    <Text style={styles.companyName}>{work.location} - </Text>
                    <Text style={styles.contract}>{work.jobType}</Text>
                  </View>
                </View>
                <Text style={styles.workDescription}>{work.description}</Text>
              </View>
            </View>
          );
        })}
        {education && 
        education.map(edu => {
          return(
            <View style={styles.wrapperInformation} key={edu._id}>
              <View style={styles.wrapperImagen}>
                <Image
                  source={require("../../../assets/EducationImg.png")}
                  style={styles.img}
                />
              </View>
              <View style={styles.wrapperInformacion}>
                <Text style={styles.workDate}>
                  {edu.year_in} - {edu.inCourse ? "Actualidad" : edu.year_out}
                </Text>
                <View style={styles.descriptionWrapper}>
                  <Text style={styles.titleWork}>{edu.educationTitle}</Text>
                  <View style={styles.companyWrapper}>
                    <Text style={styles.contract}>{edu.educationStatus}</Text>
                  </View>
                </View>
                <Text style={styles.workDescription}>{edu.description}</Text>
              </View>
            </View>
          )
        })}
    </View>
  );
};

export default CardInfoProfesional;

//Style component as a box with shadow and rounded corners height 132px
