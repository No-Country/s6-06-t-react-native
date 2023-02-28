import { View, Text, Modal, TouchableWithoutFeedback, Pressable, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import ModalReactions from '../../ModalReactions/ModalReactions'
import { useCommentInput } from '../../../hooks/useCommentInput'
import Postularme from "../../../../assets/Postularme.png"
import { useNavigation } from '@react-navigation/native'
export default function Comments() {
    const navigation = useNavigation();
    const [Show, setShow] = useState(false);
    let {Focus, setFocus} = useCommentInput();
    const handlerPostulations = () => {
        alert("LA POSTULACIÓN HA SIDO ENVIADA CORRECTAMENTE")
    }
    return (
        <View style={styles.ActionPostContain} >
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)} onPressOut={()=> setShow(!Show)} >
                <View style={[styles.ActionPost, styles.borderRight]} >
                    <TouchableOpacity style={{alignItems: 'center'}} onPress= {() => handlerPostulations()}>
                        <MaterialCommunityIcons name="briefcase-upload-outline" size={24}  />
                        <Text style={styles.descriptionComment}>Postularme</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={[styles.ActionPost, styles.borderRight]} onPress={()=> setFocus(!Focus)}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress= {() => {}}>
                        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                        <Text style={styles.descriptionComment}>Comentar</Text>
                    </TouchableOpacity>
                </View>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.ActionPost}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress= {() => {navigation.navigate("DirectMessages")}}>
                        <Feather name="send" size={24} color="black" />
                        <Text style={styles.descriptionComment}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}