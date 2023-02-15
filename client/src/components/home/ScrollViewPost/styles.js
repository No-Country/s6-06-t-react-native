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
    },
    buttonShortPost : {
        alignSelf : 'center',
        width : ScreenWidth <= 360 ? '70%' : '80%',
        fontSize : ScreenWidth <= 360 ? 12 : 15,
        textDecorationLine : 'underline',
        color : colors.facebook,
        textDecorationColor : colors.facebook,
        paddingBottom : 15
    },
    descriptionComment : {
        fontSize : ScreenWidth <= 360 ? 10: 12,
        fontWeight : '400'
    },
    ContainCommentReaction:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 15,
        paddingBottom : 5,
        paddingTop : 5
    },
    containReaction: {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        minWidth : 80
    },
    TextAmountComment : {
        textDecorationLine : 'underline',
        textDecorationColor : colors.text_grey,
        color : '#626A6D',
        fontSize : ScreenWidth <= 360 ? 12: 14
    }

    
    
})

