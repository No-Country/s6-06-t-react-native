import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    botonGrande: {
        width: 200,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 5,
        color: '#4245E5',
    },
    rol: {
        color: '#ACB4BE',
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
        // borderWidth: 1,
        // color: 'red',
        // height: 400,
    },
    menuBottom: {
        flex: 1,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        width: 230,
        position: 'relative',
        right: 20,
        // PARA POSICIONARLO MÁS A LA IZQUIERDA
    },
    menuBottomOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '500',
        // paddingRight: 50,
        // marginRight: 40,
        // alignContent: 'center',
        // justifyContent: 'center',
        
    },
    channels: {
        marginVertical: 8,
        position: 'relative',
        left: 26,
    },
    menuTextChannels: {
        fontSize: 15,
        fontWeight: '600'
    },
    extra: {
        position:'relative',
        bottom: 15,
        left: 60,
    },
    menuTextExtra: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '500',
        color: '#626A6D',
        
    },

})