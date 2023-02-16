import {StatusBar, StyleSheet} from 'react-native';
import { colors } from '../../../constants';
import { ScreenHeight, ScreenWidth } from '../../../utils/ScreenDimesions';




export const styles = StyleSheet.create({
    header: {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingBottom : 10
    },
    inputContain :{
        backgroundColor : colors.input_background,
        flexDirection : 'row',
        padding : 8,
        alignItems : 'center',
        // justifyContent : ',
        borderRadius : 30,
        flexGrow : 0.5,
        maxWidth : '70%'
    },
    imgUserHeader: {
        width : 40,
        height : 40,
        borderRadius : 20
    },
    profileButton: {
        borderColor: colors.title,
        borderWidth : 1,
        borderRadius : 20,
        padding : 5,
        backgroundColor : colors.text_grey,
    },
    textCV: {
        color : colors.title,
        fontSize : 15
    },

    // title : {
    //     fontSize : ScreenWidth <= 360 ? 20 : 25,
    //     fontWeight : '800',
    //     color : colors.title,
    //     paddingLeft : 30,
    // },
    // selectComunity:{ 
    //     flexDirection : 'row', 
    //     alignItems: 'center', 
    //     justifyContent:'center',
    //     maxWidth : 150,
    // },
    // options : {
    //     width : ScreenWidth,
    //     flexDirection : 'row',
    //     alignItems : 'center',
    //     justifyContent : 'space-evenly',
    //     paddingHorizontal : 5,
    //     marginVertical : 10,
    //     borderBottomWidth : 1,
    //     borderBottomColor : colors.grey_line
    // },
    // text : {
    //     paddingBottom : 10,
    //     fontWeight : '600',
    //     height : '100%',
    //     textAlignVertical : 'bottom',
    //     textAlign : 'center'
    // },
    // type : {
    //     fontSize : ScreenWidth <= 360 ? 12 : 16,
    //     flexGrow : 0.2
    // },
    // type2 : {
    //     fontSize : ScreenWidth <= 360 ? 16: 25,
    //     flexGrow : 0.5
    // },
    // selected : {
    //     color : colors.title,
    //     fontSize : ScreenWidth <= 360 ? 12 : 16,
    //     borderBottomColor : colors.title,
    //     borderBottomWidth : 2
    // },


    typeComunity :{
        paddingBottom : ScreenWidth <= 360 ? 8: 12,
        paddingTop : ScreenWidth <= 360 ? 6: 0,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
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
        flexGrow : 0.8,
        left : 40    
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