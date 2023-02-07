import { StyleSheet} from 'react-native';
import { colors } from '../../../constants';
import {  ScreenWidth } from '../../../utils/ScreenDimesions';

export const styles = StyleSheet.create({
    scroll : {
    },
    datePublish:{

        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    line:{
        width : '30%',
        borderBottomColor : 'black',
        borderBottomWidth : 1
    },
    PostCard:{
        marginVertical : 10,
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
        paddingTop : 10,
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
        fontWeight : '600'
    },
    BodyPost:{
        width : '100%',
        paddingTop : 20,
        alignItems : 'center',
    },
    TextBody : {
        alignSelf : 'center',
        width : ScreenWidth <= 360 ? '70%' : '80%',
        fontSize : ScreenWidth <= 360 ? 12 : 15,
        paddingLeft : 5,
        paddingBottom : 10
    },
    ActionPostContain : {
        width : ScreenWidth,
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderTopColor : colors.grey_line,
        borderTopWidth : 1
    },
    ActionPost : {
        width : '33%',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 8
    },
    borderRight : {
        borderRightWidth : 1,
        borderRightColor : colors.grey_line
    },
    PushPin : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 10,
        borderBottomWidth : 1
    },
    TextPushPin : {
        fontSize : ScreenWidth <= 360 ? 8 : 12,
        paddingLeft : 5,
        fontWeight : '400'
    }
    
    
})

export const stylesHeader = StyleSheet.create({
    header: {
        paddingTop : 10,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingBottom : 20,
        // height : '10%'
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
        maxWidth : 150,
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
        paddingBottom : ScreenWidth <= 360 ? 0: 12,
        paddingTop : ScreenWidth <= 360 ? 6: 0,
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
})
