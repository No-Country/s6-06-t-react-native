
import React from 'react';
import {Image, Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import { colors } from '../../constants';
import icons from '../../utils/icons';
import {styles} from './styles'

const ModalReactions = ({status, setShow, Show}) => {
    if (!status) {
        return (<View></View>)
    }
    return (
        <View style={styles.centeredView}>
            <TouchableWithoutFeedback onPressIn={()=> setShow(!Show)} >
                <Image source={icons.smile} style={{width:25, height:25, marginEnd : 10}}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)}  >
                <Image source={icons.heart} style={{width:25, height:25, marginEnd : 10}}/>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)}  >
                <Image source={icons.claping} style={{width:25, height:25, marginEnd : 10}}/>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)}  >
                <Image source={icons.party} style={{width:25, height:25,marginEnd : 10}}/>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=> setShow(!Show)}  >
                <Image source={icons.thumbsUp} style={{width:25, height:25,}}/>
            </TouchableWithoutFeedback>
        </View>
    );
}




export default ModalReactions;
