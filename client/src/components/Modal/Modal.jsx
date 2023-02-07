import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

const ModalHome = ({modalVisible, setModalVisible}) => {
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={[styles.centeredView, { backgroundColor: 'rgba(0, 0, 0, 0.73)' }]}>

                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>CANALES</Text>
                        <View style={styles.selectModal}>
                            <View style={[styles.selectFirst]} >
                                <Text style={[styles.selectdAgain]} >Pre-seleccionado 7</Text>
                                <AntDesign name="checkcircleo" size={16} color={colors.facebook} />
                            </View>
                            <View style={[styles.selectFirst]} >
                                <Text style={[]} >Requerimientos - jobs</Text>
                                <AntDesign name="checkcircleo" size={16} color={colors.black} />
                            </View>
                            <View style={[styles.selectFirst]} >
                                <Text style={[]} >Equipo Amazon</Text>
                                <AntDesign name="checkcircleo" size={16} color={colors.black} />
                            </View>
                            <View style={[styles.selectFirst]} >
                                <Text style={[]} >Proyectos</Text>
                                <AntDesign name="checkcircleo" size={16} color={colors.black} />
                            </View>
                            
                        </View>
                        <TouchableWithoutFeedback>
                            <Text style={[styles.button, styles.ButtonExplorer]}>Abrir Canal</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={[styles.button, styles.buttonClose]}>Explorar Canales</Text>
                        </TouchableWithoutFeedback>


                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalHome;