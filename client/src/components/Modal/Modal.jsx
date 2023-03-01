import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../PrimaryButton';

const ModalHome = ({isModalVisible, setIsModalVisible}) => {
    let handleSendNewPost = ()=>{

    }
    return (
        <Modal visible={isModalVisible} animationType="slide">
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <AntDesign name="close" size={25} style={styles.x} />
        </TouchableOpacity>
     
      <View style={styles.modalContainer}>
        <Text style={styles.sobreMi}>Nueva Publicación</Text>
        <View
          style={[
            styles.inputContainer,
          ]}
        >
          <TextInput
              value={data}
              onChangeText={(value) => setdata(value)}
            placeholder={ "Escribir..."}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            multiline={true}
          />
        </View>
        <View style={styles.numContainer}>
          <Text>{data ? data.length : 0}/3000</Text>
        </View>
        <PrimaryButton text="Publicar" handler={handleSendNewPost} />
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

export default ModalHome;

