import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../../constants';
import { AntDesign } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
    centeredView: {
        position : 'absolute',
        height : '100%',
        width : '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    ButtonExplorer: {
        backgroundColor: colors.title,
        width: '100%',
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,
        marginTop: 10
    },
    buttonClose: {
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: colors.facebook,
        fontWeight: '600',
        fontSize: 16,
        color: colors.facebook
    },
    modalText: {
        paddingBottom: 15,
        textAlign: 'center',
        borderBottomColor: colors.grey_line,
        borderBottomWidth: 1,
        width: '100%',
        color : colors.facebook,
        fontWeight : '700',
        fontSize : 20
    },
    selectModal: {
        paddingTop : 10,
        width : '100%'
    },
    selectFirst: {
        paddingVertical: 10,
        borderBottomColor: colors.grey_line,
        borderBottomWidth: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },
    selectdAgain : {
        color : colors.facebook,
        fontWeight : '700',
        fontSize : 16,
        textDecorationLine : 'underline',
        textDecorationStyle : 'solid'
    }
});

export default ModalHome;