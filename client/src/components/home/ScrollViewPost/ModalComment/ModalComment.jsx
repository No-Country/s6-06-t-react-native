import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, TextInput, Dimensions, FlatList, Image, ActivityIndicator } from 'react-native';
import { colors } from '../../../../constants';
import { useComment } from '../../../../hooks/usePost';
import PrimaryButton from '../../../PrimaryButton'
import CardComent from './CardComent';
import ListComentContain from './ListComentContain';
const ModalComment = ({ isModalVisible, setIsModalVisible, idPost, user, count }) => {
  const [data, setdata] = useState();
  const [Load, setLoad] = useState(false);
  const [ListComent, setListComent] = useState([1,2,3,4,5,6,7]);
  const [total, settotal] = useState(count);
  
    // url, token, data
  let { addComment } = useComment();
  let pushComment = ()=>{
    let value = {
      body : data
    }
    addComment(`/comment/new/${idPost}/post`, user.token, value)
    setdata(undefined)
    
    setListComent([8, ...ListComent])
    settotal(total + 1);
  }
  return (
    <Modal visible={isModalVisible} animationType="slide">
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <AntDesign name="close" size={25} style={styles.x} />
        </TouchableOpacity>
      {total === 0 ? 
      <View style={{flex : 2}}>
        <Text>No hay comentarios</Text>
      </View>
      :
      <ListComentContain ListComent={ListComent} Load={Load}/>
      }

      
      <View style={styles.modalContainer}>
        <Text style={styles.sobreMi}>Comentar</Text>
        <Text style={styles.desc}>Descripción</Text>
        <View
          style={[
            styles.inputContainer,
          ]}
        >
          <TextInput
              value={data}
              onChangeText={(value) => setdata(value)}
            placeholder={ "Ingrese su comentario..."}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            multiline={true}
          />
        </View>
        <View style={styles.numContainer}>
          <Text>{data ? data.length : 0}/3000</Text>
        </View>
        <PrimaryButton text="Guardar" handler={pushComment} />
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
