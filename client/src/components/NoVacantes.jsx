import {View, Text, Image} from 'react-native';
import noPostulaciones from '../../assets/noPostulaciones.png'
const NoVacantes = ({styles, rol}) => {
    return (
        <View>
            <View>
                <Image source={noPostulaciones} />
                <Text>Aún no tenemos vacantes para ${rol}</Text>
            </View>
            <Text>¡Pronto tendremos novedades para vos!</Text>
            <Text>Regresar al Canal General</Text>
        </View>
    )
}
export default NoVacantes;