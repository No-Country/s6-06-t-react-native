import { View, Text, Modal, TouchableWithoutFeedback, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import ModalReactions from '../../ModalReactions/ModalReactions'
import { useCommentInput } from '../../../hooks/useCommentInput'
import Postularme from "../../../../assets/Postularme.png"
export default function Comments() {
    const [Show, setShow] = useState(false);
    let {Focus, setFocus} = useCommentInput();
    return (
        <View style={styles.ActionPostContain} >
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)} onPressOut={()=> setShow(!Show)} >
                <View style={[styles.ActionPost, styles.borderRight]} >
                    {/* <Image source={Postularme} /> */}
                    <MaterialCommunityIcons name="briefcase-upload-outline" size={24}  />
                    <Text style={styles.descriptionComment}>Postularme</Text>
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