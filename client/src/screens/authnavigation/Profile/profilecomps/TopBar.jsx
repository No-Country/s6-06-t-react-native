import { View, Text, StyleSheet, Pressable,Image, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";



const Profile = ({ navigation }) => {
    return (
        <View style={styles.Topcontainer}>     
            <View style={styles.backButton} >
                <Icon name="left" size={20} color="#4245E5"/>
            </View>
            <Text style={styles.tittle}>Profile</Text>
            <View style={styles.backButton}>
               <Image source={require("../icons/profilepicture.png")} style={{width:35, height:35}} />
            </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    Topcontainer: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    tittle: {
        fontSize: 27,
        fontWeight: "bold",
    },
    backButton: {
        backgroundColor: "#e0e0e0",
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }
    });

    export default Profile;