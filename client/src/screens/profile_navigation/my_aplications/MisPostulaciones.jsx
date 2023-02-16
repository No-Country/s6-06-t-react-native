import { View, Text, StyleSheet } from 'react-native'
const MisPostulaciones = () =>{
  return (
    <View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MisPostulaciones;