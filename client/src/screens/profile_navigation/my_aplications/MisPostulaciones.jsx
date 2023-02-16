import { View, Text } from 'react-native'

const MisPostulaciones = () =>{
  return (
    <View>
        <Text>Hola soy el canal MisPostulaciones 7</Text>
        
        <View style={styles.tab}>
            <View style={styles.tabinfo}>
              <Text style={styles.tabText}>
                Teléfono: {userInfo ? userInfo.phone : ""}
              </Text>
            </View>
          </View>
    </View>
  )
}

export default MisPostulaciones;