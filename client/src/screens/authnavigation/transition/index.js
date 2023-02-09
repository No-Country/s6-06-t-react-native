import { View, Text,StyleSheet, useWindowDimensions, Image } from "react-native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { styles } from './styles'
import LottieView from 'lottie-react-native'
import Logo from '../../../../assets/Logo.png'

const Transition = ({navigation}) => {
    const {width} = useWindowDimensions();
    const {height} = useWindowDimensions();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: "LOG_IN", payload: true})
        }, 2000)
    }, [])
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            {/* <View style={{backgroundColor: 'white',opacity: .25, height: 22, width: width, position:'absolute', top: 0}}></View> */}
            <View style={styles.main}>
                <Image source={Logo} style={{width: 350, height: 350}}/>
                <Text style={[styles.text]}>Iniciando sesión...</Text>
            </View>
            {/* <Text style={[styles.Text, {position: 'absolute', top: height/2+50, color: 'white'}]}>Cargando Mapas</Text> */}
        </View>  
    )
}
export default Transition;