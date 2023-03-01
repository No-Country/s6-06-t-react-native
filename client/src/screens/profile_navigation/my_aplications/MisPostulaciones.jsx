import { View, Text, StyleSheet } from 'react-native'
import { styles } from './styles';
import BackButton from '../../../components/BackButton';
const MisPostulaciones = () =>{
  return (
    <View style={styles.container}>

      <View style={{position: "absolute", top: 15, left: 15}}>
        <BackButton />
      </View>
        <Text>Hola soy el canal MisPostulaciones 7</Text>
        
        <View style={styles.tab}>
            <View style={styles.tabinfo}>
              <Text style={styles.tabText}>
                {/* Teléfono: {userInfo ? userInfo.phone : ""} */}
                Teléfono: +62 524214124
              </Text>
            </View>
          </View>
    </View>
  )
}

export default MisPostulaciones;