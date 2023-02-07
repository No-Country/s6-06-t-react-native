import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
export default function OptionsComunity() {
    return (
        <View style={styles.options}>
            <View style={styles.selectComunity}>
                <Text style={[styles.type2, styles.text]} >Pre-sel...</Text>
                <Image source={require('../../../../assets/back-to-icon.png')} style={{ width: 10, padding: 0, margin: 0, transform: [{ rotate: '-90deg' }] }} />
            </View>
            <Text style={[styles.type, styles.text]}>Comunidades</Text>
            <Text style={[styles.type, styles.text, , styles.selected]}>Canales</Text>
        </View>
    )
}