import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function InfoComunity({Channel}) {
    return (
        <View style={styles.typeComunity}>
            <Text style={styles.subtitle}>{Channel}</Text>
            <View style={styles.imgsUsers}>
                <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserComunity, { top: 0, left: 0 }]} />
                <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserComunity, { top: 0, left: 40 }]} />
                <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserComunity, { top: 0, left: 20 }]} />
                <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserComunity, { top: 0, left: 60 }]} />
                <Text style={[styles.bundleTotalUsers, { top: 0, left: 80 }]}>+500</Text>
                <Text style={[styles.plusUsers, { top: 0, left: 100 }]} >+</Text>
            </View>
        </View>
    )
}