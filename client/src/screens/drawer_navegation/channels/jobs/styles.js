import {StatusBar, StyleSheet} from 'react-native';
import { ScreenWidth } from '../../../../utils/ScreenDimesions';

export const styles = StyleSheet.create({
    homeContain : {
        flex : 1, 
        backgroundColor: 'white',
    },
    HeaderContain : {
        paddingTop : 10,
        paddingBottom : 5
    },
    ScrollContain : {
        flex : ScreenWidth <= 360 ? 5 : 7,
        paddingVertical : 10,
        marginTop: 10,

        // backgroundColor: 'red'
    },
    saludo: {
        color: "#4245E5",
        fontSize: 30,
        fontWeight: "700",
        paddingLeft: 10,
        marginVertical: 12,
    },
    button: {
        marginHorizontal: 10,
        backgroundColor: "#4245E5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
        height: 40,
        width: 120,
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: "500",
        color: "white",
    },
    main: {
        marginTop: 10,
        alignContent: 'center',
        alignSelf: 'center',
        
    },
    bodyMain: {
        marginVertical : 10,
        marginHorizontal : 4,
        paddingHorizontal: 15,
        paddingVertical : 15,
        borderWidth : 1,
        borderColor : "#DAE1EA",
        borderRadius : 10
    },
    bodyMainText: {
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: "500",
    },
    novedadesNoJobs: {
        fontWeight: "700",
        textAlign: 'center',
    },
    textBackCanal: {
        marginTop: 20,
        color: "#4245E5",
        fontWeight: "700",
        textAlign: 'center',
    },
})


