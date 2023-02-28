import {View, Text, Image} from 'react-native';
import noPostulaciones from '../../assets/noPostulaciones.png'
const NoVacantes = ({styles, rol}) => {
    return (
        <View style={styles.main}>
            <View style={styles.bodyMain}>
                <Image source={noPostulaciones} />
                <Text style={styles.bodyMainText}>Aún no tenemos vacantes para ${rol}</Text>
            </View>
            <Text style={styles.novedadesNoJobs}>¡Pronto tendremos novedades para vos!</Text>
            <Text style={styles.textBackCanal}>Regresar al Canal General</Text>
        </View>
    )
}
export default NoVacantes;