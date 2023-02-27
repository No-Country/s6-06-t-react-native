import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
      whiteContainer: {
      paddingTop: 28,
      paddingBottom:50,
      backgroundColor: "#fff",
      width: "100%",
    },
    formContainer: {
      padding: 18,
    },
    header:{
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 10
    },
    requeridas:{
      color: '#626A6D',
      marginBottom: 16
    },
    checkboxWrapper:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16
    },
    checkbox:{
      marginRight: 9
    },
    checkboxLabel:{
      fontSize:17
    },
    fixedButton:{
      width: '100%',
      position:'absolute',
      bottom:0,
      paddingHorizontal: 18
    }
  });