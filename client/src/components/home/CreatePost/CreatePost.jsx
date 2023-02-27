import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { colors } from '../../../constants';
import { usePost, usePostCreate } from '../../../hooks/usePost';
import { ScreenWidth } from '../../../utils/ScreenDimesions';

const CreatePost = ({token,uidChannel, setAll}) => {
    let {create, Response} = usePostCreate();
    let { Post, getPosts} = usePost();
    const [Focus, setFocus] = useState(false);
    const [Form, setForm] = useState({
        title : "new post",
        description: '',
        attached : ''
    })
    let handlerChangeInput = (e)=>{
        setForm({
            ...Form,
            description : e
        })
    }
    let handlerSend = async ()=>{
        let response

        if (Form.description.length > 0) {
            response = await create(`/post/new/${uidChannel}`, token, Form)
        }
        if (response.status === 201) {
            setForm({
                ...Form,
                description : ''
            })
            setFocus(false)
            // let data = await getPosts(`/channel/${uidChannel}`, token)
            // setAll(data)
            
            
        }
        
    }

    return (
        <View style={styles.shadow}>
           <View style={styles.CreatePostContainer}>
                <View><Text style={[styles.radius,styles.plusUsers]} >+</Text></View>
                <View><Text style={[styles.radius, {flexGrow : 0.15}]}><MaterialIcons name="insert-emoticon" size={24} color={colors.facebook} /></Text></View>
                <View style={styles.inputContain} >
                    <TextInput 
                        style={styles.input}
                        placeholder={"Publicar"}
                        placeholderTextColor={colors.facebook}
                        onChangeText={handlerChangeInput}
                        value={Form.description}
                        onFocus={()=> setFocus(true)}
                        
                    />
                    <View style={styles.iconsContain}>
                        <FontAwesome name="microphone" size={20} color={colors.facebook} />
                        <Feather name="send" size={20} color={colors.facebook} onPress={handlerSend}/>
                    </View>
                </View>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    CreatePostContainer : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        paddingBottom: 10,
        paddingTop : 10,
        borderTopColor : colors.grey_line,
        borderTopWidth : 1
       
    },

    radius : {
        backgroundColor : colors.text_grey,
        width : 30,
        height : 30,
        borderRadius : 20,
        textAlign : 'center',
        textAlignVertical : 'center',
        marginEnd : 10
    },
    plusUsers:{
        fontSize : ScreenWidth <= 360 ? 16 : 20,
        color : colors.facebook,
        flexGrow : 0.15
    },
    inputContain:{
        borderWidth : 1,
        borderColor : colors.grey_line,
        backgroundColor : colors.text_grey,
        borderRadius : 10,
        width : '70%',
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingEnd : 10
    },
    input: {
        paddingStart : 10,
        width : '70%'
    },
    iconsContain:{
        flexDirection : 'row', 
        width : 50,
        justifyContent: 'space-between'
    }
})

export default CreatePost;
