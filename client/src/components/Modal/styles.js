import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        position : 'absolute',
        height : '100%',
        width : '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    ButtonExplorer: {
        backgroundColor: colors.title,
        width: '100%',
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,
        marginTop: 10
    },
    buttonClose: {
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        textDecorationColor: colors.facebook,
        fontWeight: '600',
        fontSize: 16,
        color: colors.facebook
    },
    modalText: {
        paddingBottom: 15,
        textAlign: 'center',
        borderBottomColor: colors.grey_line,
        borderBottomWidth: 1,
        width: '100%',
        color : colors.facebook,
        fontWeight : '700',
        fontSize : 20
    },
    selectModal: {
        paddingTop : 10,
        width : '100%'
    },
    selectFirst: {
        paddingVertical: 10,
        borderBottomColor: colors.grey_line,
        borderBottomWidth: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },
    selectdAgain : {
        color : colors.facebook,
        fontWeight : '700',
        fontSize : 16,
        textDecorationLine : 'underline',
        textDecorationStyle : 'solid'
    }
});