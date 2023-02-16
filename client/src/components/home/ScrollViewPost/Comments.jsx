import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function Comments() {
    
    return (
        <View style={styles.ActionPostContain}>
            <View style={[styles.ActionPost, styles.borderRight]}>
                <MaterialIcons name="insert-emoticon" size={24} color="black" />
                <Text style={styles.descriptionComment}>Reaccionar</Text>
            </View>
            <View style={[styles.ActionPost, styles.borderRight]}>
                <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                <Text style={styles.descriptionComment}>Comentar</Text>
            </View>
            <View style={styles.ActionPost}>
                <Feather name="send" size={24} color="black" />
                <Text style={styles.descriptionComment}>Enviar</Text>
            </View>
        </View>
    )
}