import { View, TextInput, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Feather, EvilIcons } from '@expo/vector-icons';
import { colors } from '../../../constants'

export default function NavMenu() {
    return (
        <View style={styles.header}>
            <View >
                <Feather name="menu" size={24} color="black" />
            </View>
            <View style={styles.inputContain}>
                <EvilIcons name="search" size={24} color={colors.lightGrey} />
                <TextInput
                    type='text'
                    placeholder='Buscar en Sin Fronteras'
                />
            </View>
            <View>
                <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserHeader]} />
            </View>
        </View>
    )
}