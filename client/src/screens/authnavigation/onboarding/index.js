import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import Logo from '../../../../assets/Logo.png'
const OnBoarding = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image source={Logo} style={{width: 300, height: 300}}/>
            <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Sin Fronteras</Text>
            <Button title="Go To Profile" onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}
export default OnBoarding;