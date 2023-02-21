import { View, Text, Modal, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import ModalReactions from '../../ModalReactions/ModalReactions'
import { useCommentInput } from '../../../hooks/useCommentInput'

export default function Comments() {
    const [Show, setShow] = useState(false);
    let {Focus, setFocus} = useCommentInput();
    return (
        <View style={styles.ActionPostContain} >
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)} onPressOut={()=> setShow(!Show)} >
                <View style={[styles.ActionPost, styles.borderRight]} >
                    <ModalReactions status={Show} setShow={setShow} Show={Show} />
                    <MaterialIcons name="insert-emoticon" size={24} color="black" />
                    <Text style={styles.descriptionComment}>Reaccionar</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={[styles.ActionPost, styles.borderRight]} onPress={()=> setFocus(!Focus)}>
                    <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                    <Text style={styles.descriptionComment}>Comentar</Text>
                </View>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.ActionPost}>
                    <Feather name="send" size={24} color="black" />
                    <Text style={styles.descriptionComment}>Enviar</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}