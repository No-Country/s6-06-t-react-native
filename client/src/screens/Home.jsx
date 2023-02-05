import React from 'react';
import {View, StyleSheet, Text, StatusBar, SafeAreaView, Image, ScrollView, TextInput} from 'react-native';
import { colors } from '../constants'
import { ScreenWidth } from '../utils/ScreenDimesions';
import { Entypo, Feather, EvilIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                <View >
                    <Feather name="menu" size={24} color="black" />
                </View>
                <View style={styles.inputContain}>
                    <EvilIcons name="search" size={24} color={colors.lightGrey} />
                    <TextInput
                        type='text'
                        placeholder='Buscar en Sin Fronteras'
                        style={styles.input} 
                    />
                </View>
                <View>
                    <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserHeader ]} />
                </View>
            </View>
            <Text style={[styles.title]}>Hola, Camilo!</Text>
            <View style={styles.options}>
                <View style={styles.selectComunity}>
                    <Text style={[styles.type2,styles.text]} >Pre-sel...</Text>
                    <Image source={require('../../assets/back-to-icon.png')} style={{ width: 10, padding: 0, margin : 0 ,transform: [{rotate: '-90deg'}]}} />
                </View>
                <Text style={[styles.type,styles.text]}>Comunidades</Text>
                <Text style={[styles.type,styles.text, , styles.selected]}>Canales</Text>
            </View>
            <View style={styles.typeComunity}>
                <Text style={styles.subtitle}>Pre-seleccionado 7</Text>
                
                <View style={styles.imgsUsers}>
                    <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserComunity, { top : 0, left : 0 } ]} />
                    <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserComunity, { top : 0, left : 20 }]} />
                    <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserComunity, { top : 0, left : 40 }]} />
                    <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserComunity, { top : 0, left : 60 }]} />
                    <Text style={[styles.bundleTotalUsers, { top : 0, left : 80 }]}>+500</Text>
                    <Text style={[styles.plusUsers, { top : 0, left : 100 }]} >+</Text>
                </View>
            </View>
            <View styles={styles.ScrollPostContain}>
                <ScrollView style={styles.scroll} >
                    <View style={styles.datePublish}>
                        <View style={styles.line}></View>
                        <Text style={styles.date}>Lunes 10 de Enero</Text>
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.PostCard} >
                        <View style={styles.HeaderPost}>
                            <View style={{alignSelf : 'center'}}>
                                <Image source={require('../../assets/users.jpeg')} style={[styles.imgUserPost ]}/>
                                <View style={styles.Conection}></View>
                            </View>
                            <View style={styles.TitlePostContain}>
                                <View style={styles.TitlePost}>
                                    <Text style={styles.UserName}>Gimena Ruiz</Text>
                                    <Text style={styles.HoursPost}> 15:50 hs</Text>
                                </View>
                                <View>
                                    <Text style={styles.SubtitlePost}>Administradora de Sin Fronteras</Text>
                                </View>
                            </View>
                            
                            <View>
                               <Entypo name="dots-three-vertical" size={24} color={colors.facebook} />
                            </View>
                        </View>
                        <View style={styles.BodyPost}>
                            <Text style={styles.TextBody} >¡Bienvenidos al Pre-seleccionado 7 de Sin Fronteras! Queremos en primer lugar agradecerles por la confianza en este proyecto que ya está cambiando los paradigmas del.... </Text>
                        </View>
                        <View>
                            <View>
                                <MaterialIcons name="insert-emoticon" size={24} color="black" />
                                <Text>Reaccionar</Text>
                            </View>
                            <View>
                                <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                <Text>Comentar</Text>
                            </View>
                            <View>
                                <Feather name="send" size={24} color="black" />
                                <Text>Enviar</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop : StatusBar.currentHeight,
        paddingTop : 10,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingBottom : 20
    },
    inputContain :{
        backgroundColor : colors.input_background,
        flexDirection : 'row',
        padding : 8,
        alignItems : 'center',
        justifyContent : 'space-between',
        borderRadius : 30
    },
    imgUserHeader: {
        width : 40,
        height : 40,
        borderRadius : 20
    },
    title : {
        fontSize : ScreenWidth <= 360 ? 20 : 25,
        fontWeight : '800',
        color : colors.title,
        paddingLeft : 30,
        
    },
    selectComunity:{ 
        flexDirection : 'row', 
        alignItems: 'center', 
        justifyContent:'center',
        maxWidth : 150
    },
    options : {
        width : ScreenWidth,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        paddingHorizontal : 5,
        marginVertical : 10,
        borderBottomWidth : 1,
        borderBottomColor : colors.grey_line
    },
    text : {
        paddingBottom : 10,
        fontWeight : '600',
        height : '100%',
        textAlignVertical : 'bottom',
        textAlign : 'center'
    },
    type : {
        fontSize : ScreenWidth <= 360 ? 12 : 16,
        flexGrow : 0.2
    },
    type2 : {
        fontSize : ScreenWidth <= 360 ? 16: 25,
        flexGrow : 0.5
    },
    selected : {
        color : colors.title,
        fontSize : ScreenWidth <= 360 ? 12 : 16,
        borderBottomColor : colors.title,
        borderBottomWidth : 2
    },
    typeComunity :{
        paddingTop : 20,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    subtitle : {
        fontSize : ScreenWidth <= 360 ? 15 : 20,
        fontWeight : '500',
        letterSpacing : ScreenWidth <= 360 ? 0.4 : 0.7,
        paddingLeft : ScreenWidth <= 360 ? 10 : 20,
        color : colors.subtitle
    },
    imgsUsers: {
        position : 'relative',
        flexGrow : 0.8
    },
    imgUserComunity : {
        position : 'absolute',
        width : 30,
        height : 30,
        borderRadius : 20
    },
    bundleTotalUsers:{
        position : 'absolute',
        backgroundColor : colors.title,
        color : colors.white,
        alignContent : 'center',
        textAlignVertical : 'center',
        width : 30,
        height : 30,
        fontSize : ScreenWidth <= 360 ? 8 : 12,
        borderRadius : 20    
    },
    plusUsers:{
        position : 'absolute',
        backgroundColor : colors.text_grey,
        width : 30,
        height : 30,
        borderRadius : 20,
        textAlign : 'center',
        textAlignVertical : 'center',
        fontSize : ScreenWidth <= 360 ? 16 : 20,
        color : colors.facebook
    },
    datePublish:{
        paddingTop : 30,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    line:{
        width : '30%',
        borderBottomColor : 'black',
        borderBottomWidth : 1
    },
    date:{
        fontSize : 14,
        letterSpacing : 0.7,
        color : colors.grey_line,
        fontWeight : '500'
    },
    scroll:{
        height : '100%'
    },
    ScrollPostContain :{


    },

    PostCard:{
        marginHorizontal : 4,
        paddingVertical : 5,
        borderWidth : 1,
        borderColor : colors.grey_line,
        borderRadius : 10
    },
    imgUserPost : {
        width : 40,
        height : 40,
        borderRadius : 20
    },
    Conection:{
        position : 'absolute',
        bottom : 0,
        right : 0,
        width : 10,
        height : 10,
        backgroundColor : 'green',
        borderRadius : 20
    },
    HeaderPost:{
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems: 'center'
    },
    TitlePost : {
        flexDirection : 'row',
        alignItems : 'flex-end'
    },
    UserName:{
        fontWeight : '700',
        fontSize : ScreenWidth <= 360 ? 15: 20,
        letterSpacing : ScreenWidth <= 360 ? 0.4: 0.7   
    },
    HoursPost :{
        fontSize : ScreenWidth <= 360 ? 8 : 12,
        fontWeight : '400',
        alignSelf : 'center'
    },
    SubtitlePost :{
        fontSize : ScreenWidth <= 360 ? 10 : 14,
        color : colors.text_grey,
        fontWeight : '400'
    },
    BodyPost:{
        width : '100%',
        paddingTop : 20,
        alignItems : 'center',
        borderWidth : 1,
    },
    TextBody : {
        alignSelf : 'center',
        width : ScreenWidth <= 360 ? '70%' : '80%',
        fontSize : ScreenWidth <= 360 ? 12 : 15,
        borderWidth : 1,
        paddingLeft : 5
    }
})

export default Home;
