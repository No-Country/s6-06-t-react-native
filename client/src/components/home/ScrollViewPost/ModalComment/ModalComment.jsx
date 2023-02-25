import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, TextInput, Dimensions, FlatList, Image, ActivityIndicator } from 'react-native';
import { colors } from '../../../../constants';
import PrimaryButton from '../../../PrimaryButton'
import CardComent from './CardComent';
const ModalComment = ({ isModalVisible, setIsModalVisible, data }) => {
  const [Load, setLoad] = useState(false);
  const [ListComent, setListComent] = useState([1,2,3,4,5,6,7]);

  

  return (
    <Modal visible={isModalVisible} animationType="slide">
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <AntDesign name="close" size={25} style={styles.x} />
        </TouchableOpacity>
      <View style={{flex: 2}}>

        <FlatList 
          data={ListComent}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          keyExtractor={(Coment, i)=> String(i) }
          renderItem={({item})=> (<CardComent />)}
          //  refreshing={refreshBool}
          //  onRefresh={refresh}
          onEndReachedThreshold={0.1}
          ListFooterComponent={ Load ?
              <ActivityIndicator
                size='large'
                color='#AEAEAE'
              /> : 
              <View style={{height: 100}}></View>
            }
        />
      </View>
      <View style={styles.modalContainer}>
        <Text style={styles.sobreMi}>Comentar</Text>
        {/* <Text style={styles.filasReq}>*Filas requeridas</Text> */}
        <Text style={styles.desc}>Descripción</Text>
        <View
          style={[
            styles.inputContainer,
            // { borderColor: isFocused ? colors.primary : "transparent" },
          ]}
        >
          <TextInput
            //   value={aboutMe}
            //   onChangeText={(value) => setAboutMe(value)}
            placeholder={
              data
                ? data.about
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            multiline={true}
          />
        </View>
        <View style={styles.numContainer}>
          <Text>/3000</Text>
        </View>
        <PrimaryButton text="Guardar" handler={""} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  



  modalContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    flex : 2
  },
  inputContainer: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - 25,
    height: 155,
    backgroundColor: "#fff",
    backgroundColor: colors.input_background,
    marginVertical: 15,
  },
  sobreMi: {
    fontSize: 20,
    fontWeight: "600",
  },
  filasReq: {
    fontSize: 12,
    fontWeight: "400",
    color: "#626A6D",
    marginLeft: 5,
  },
  desc: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 15,
    marginBottom: -10,
  },
  x: {
    color: "#4245E5",
    fontSize: 25,
    marginLeft: -2,
    marginBottom: 5,
  },
  numContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 15,
    marginTop: -10,
  },
})

export default ModalComment;
