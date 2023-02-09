import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Community from '../../screens/drawer_navegation/community';
import GeneralChannel from '../../screens/drawer_navegation/channels/general';
//import ShortlistedChannel from '../../screens/drawer_navegation/channels/shortlisted'
import ShortlistedChannel from '../../screens/authnavigation/home'
import JobsChannel from '../../screens/drawer_navegation/channels/jobs';
import AmazonTeamChannel from '../../screens/drawer_navegation/channels/amazon_team';
import ProjectsChannel from '../../screens/drawer_navegation/channels/projects';
import DirectMessages from '../../screens/drawer_navegation/direct_messages';

import Face from '../../../assets/Face.png'
import {styles} from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavegation = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent = {(props) => <MenuInterno props={props}/>}
    >
      <Drawer.Screen name="Shortlisted" component={ShortlistedChannel} />
      <Drawer.Screen name="Community" component={Community} />
      <Drawer.Screen name="GeneralChannel" component={GeneralChannel} />
      {/* <Drawer.Screen name="Shortlisted" component={ShortlistedChannel} /> */}
      <Drawer.Screen name="Jobs" component={JobsChannel} />
      <Drawer.Screen name="AmazonTeam" component={AmazonTeamChannel} />
      <Drawer.Screen name="Projects" component={ProjectsChannel} />
      <Drawer.Screen name="DirectMessages" component={DirectMessages} />
    </Drawer.Navigator>
  );
}

export default DrawerNavegation;

const MenuInterno = ({props}) => {
  return (
   <DrawerContentScrollView>
     {/* Parte del avatar */}
     <View style={styles.avatarContainer}>
       <Image 
         source={Face}
         style={styles.avatar}
       />
     </View>
     {/* Opciones de menú */}
     <View style = {styles.menuContainer}>

       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("Community")}}
       >
         <Text style={styles.menuText}>Comunidad</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("GeneralChannel")}}
       >
         <Text style={styles.menuText}>Canal General</Text>
       </TouchableOpacity>
       
       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("Shortlisted")}}
       >
         <Text style={styles.menuText}>#Preseleccionado 7</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("Jobs")}}
       >
         <Text style={styles.menuText}>#Requerimientos - Jobs</Text>
       </TouchableOpacity>  

       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("AmazonTeam")}}
       >
         <Text style={styles.menuText}>#Equipo Amazon</Text>
       </TouchableOpacity>
       
       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("Projects")}}
       >
         <Text style={styles.menuText}>Proyectos</Text>
       </TouchableOpacity>
      
       <TouchableOpacity
         style={styles.menuBottom}
         onPress={() => {props.navigation.navigate("DirectMessages")}}
       >
         <Text style={styles.menuText}>Mensajes Directos</Text>
       </TouchableOpacity>

     </View>
   </DrawerContentScrollView>
  )
}