import { View, Text, StyleSheet, Pressable,Image, Button } from "react-native";




const Profile = ({ navigation }) => {
    return (
        <View style={styles.Topcontainer}>     
            <Pressable style={styles.backButton} >
                <Text style={styles.backButton1}>{"<"}</Text>
            </Pressable>
            <Text style={styles.tittle}>Profile</Text>
            <Pressable style={styles.backButton} onPress={() => navigation.navigate("")}>
               <Image source={require("../icons/profilepicture.png")} style={{width:35, height:35}} />
            </Pressable>
        </View>
    );
    }

    const styles = StyleSheet.create({
    Topcontainer: {
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
        width: "100%",
    },
    tittle: {
        fontSize: 27,
        fontWeight: "bold",
    },
    backButton: {
        // roudnded button grey color
        backgroundColor: "#e0e0e0",
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",

    },
    backButton1: {
        fontSize: 20,
        color: "#000",
    },
    });

    export default Profile;