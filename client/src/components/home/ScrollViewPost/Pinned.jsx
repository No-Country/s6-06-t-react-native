import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {  AntDesign } from '@expo/vector-icons';
import { colors } from '../../../constants';

export default function Pinned({data}) {
    return (
        <View style={styles.PushPin}>
            <AntDesign name="pushpin" size={16} color={colors.danger} />
            <Text style={styles.TextPushPin}>{`Publicación fijada por ${data.forPinned} - ${data.rolUserPinned}`}</Text>
        </View>
    )
}