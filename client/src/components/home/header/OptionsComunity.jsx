import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import ModalHome from '../../Modal/Modal';
export default function OptionsComunity({TypeComunity}) {
    const [modalVisible, setModalVisible] = useState(false);

    const sliceComunity = (string)=>{
        return string.slice(0,7) + '...'
    }
    
    return (
        <View style={styles.options}>
            <View style={styles.selectComunity}>
                <Text style={[styles.type2, styles.text]} onPress={()=> setModalVisible(true)} >{sliceComunity(TypeComunity)}</Text>
                <Image source={require('../../../../assets/back-to-icon.png')} style={{ width: 10, padding: 0, margin: 0, transform: [{ rotate: '-90deg' }] }} />
            </View>
            <Text style={[styles.type, styles.text]}>Comunidades</Text>
            <Text style={[styles.type, styles.text, , styles.selected]}>Canales</Text>
            <ModalHome modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}