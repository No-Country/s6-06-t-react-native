import React from 'react';
import {View, StyleSheet, Text, StatusBar, SafeAreaView, Image, ScrollView} from 'react-native';
import { colors } from '../constants'

const Home = () => {

    return (
        <SafeAreaView  style={styles.container}>
            <Text style={styles.title}>Hola, Camilo!</Text>
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
            <ScrollView style={styles.scroll} >
                <View style={styles.datePublish}>
                    <View style={styles.line}></View>
                    <Text style={styles.date}>10 de Enero</Text>
                    <View style={styles.line}></View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : StatusBar.currentHeight
    },
    title : {
        fontSize: 25,
        fontWeight : '800',
        color : colors.title,
        paddingLeft : 30,
        
    },
    selectComunity:{ 
        flexDirection : 'row', 
        alignItems: 'center', 
        justifyContent:'center',
        flexGrow : 0,
        maxWidth : 150
    },
    options : {
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
        fontSize : 16,
        flexGrow : 0.2
    },
    type2 : {
        fontSize : 25,
        flexGrow : 0.5
    },
    selected : {
        color : colors.title,
        fontSize : 16,
        borderBottomColor : colors.title,
        borderBottomWidth : 2
    },
    typeComunity :{
        paddingTop : 20,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    subtitle : {
        fontSize : 20,
        fontWeight : '500',
        letterSpacing : 0.7,
        paddingLeft : 20,
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
        fontSize : 12,
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
        fontSize : 20,
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
    }
})

export default Home;
