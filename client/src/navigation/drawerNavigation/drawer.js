import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useState } from "react";
import Community from "../../screens/drawer_navegation/community";
import GeneralChannel from "../../screens/drawer_navegation/channels/general";
import ShortlistedChannel from "../../screens/drawer_navegation/channels/shortlisted";
// import ShortlistedChannel from '../../screens/authnavigation/home' ESTE NO ERA SOLO PARA PRENSETACION (MARCOS NECESITA TRANSLADAR SU COMPONENTE AL DE SCREENS/DRAWER_NAVEGATION)
import JobsChannel from "../../screens/drawer_navegation/channels/jobs";
import AmazonTeamChannel from "../../screens/drawer_navegation/channels/amazon_team";
import ProjectsChannel from "../../screens/drawer_navegation/channels/projects";
import DirectMessages from "../../screens/drawer_navegation/direct_messages";

import Profile from "../profileNavigation/profile.js";

import communityIcon from "../../../assets/communityIcon.png";
import channel_Icon from "../../../assets/channel_Icon.png";
import messagesIcon from "../../../assets/messagesIcon.png";
import logOutIcon from "../../../assets/logOutIcon.png";
import helpIcon from "../../../assets/helpIcon.png";
import rightDrawer from "../../../assets/rightDrawer.png";
import downDrawer from "../../../assets/downDrawer.png";
import Face from "../../../assets/Face.png";
import backDrawer from "../../../assets/backDrawer.png";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { colors } from "../../constants";

const Drawer = createDrawerNavigator();

const DrawerNavegation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="GeneralChannel"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <MenuInterno props={props} />}
    >
      <Drawer.Screen name="GeneralChannel" component={GeneralChannel} />
      <Drawer.Screen name="Community" component={Community} />
      <Drawer.Screen name="Shortlisted" component={ShortlistedChannel} />
      <Drawer.Screen name="Jobs" component={JobsChannel} />
      <Drawer.Screen name="AmazonTeam" component={AmazonTeamChannel} />
      <Drawer.Screen name="Projects" component={ProjectsChannel} />
      <Drawer.Screen name="DirectMessages" component={DirectMessages} />
      <Drawer.Screen name="ProfileStack" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavegation;

export const MenuInterno = ({ props }) => {
  const [state, setState] = useState(true);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    // navigation.navigate("LogIn");
  };
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={backDrawer} style={styles.backDrawerIcon} />
        </TouchableOpacity>
        <Image source={Face} style={styles.avatar} />
        <Text style={styles.name}>Camilo Vargas</Text>
        <Text style={styles.rol}>UX designer</Text>
      </View>
      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBottom}
          onPress={() => {
            props.navigation.navigate("Community");
          }}
        >
          <View style={styles.menuBottomOption}>
            <Image source={communityIcon} />
            <Text style={styles.menuText}>Comunidad</Text>
          </View>
          <Image source={rightDrawer} />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.menuBottom}
            onPress={() => {
              setState((e) => !e);
            }}
          >
            <View style={styles.menuBottomOption}>
              <Image source={channel_Icon} />
              <Text style={styles.menuText}>Canales</Text>
            </View>
            {state ? (
              <Image source={downDrawer} />
            ) : (
              <Image source={rightDrawer} />
            )}
          </TouchableOpacity>
        </View>

        {/* CANALES DESPLEGABLES */}
        {state && (
          <View>
            <TouchableOpacity
              style={styles.channels}
              onPress={() => {
                props.navigation.navigate("GeneralChannel");
              }}
            >
              <Text style={[styles.menuTextChannels, { color: colors.primary }]}>
                #General
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.channels}
              onPress={() => {
                props.navigation.navigate("Shortlisted");
              }}
            >
              <Text style={styles.menuTextChannels}>#Preseleccionado 7</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.channels}
              onPress={() => {
                props.navigation.navigate("Jobs");
              }}
            >
              <Text style={styles.menuTextChannels}>
                #Requerimientos - Jobs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.channels}
              onPress={() => {
                props.navigation.navigate("AmazonTeam");
              }}
            >
              <Text style={styles.menuTextChannels}>#Equipo Amazon</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.channels}
              onPress={() => {
                props.navigation.navigate("Projects");
              }}
            >
              <Text style={styles.menuTextChannels}>#Proyectos</Text>
            </TouchableOpacity>
          </View>
        )}
        {/* FIN CANALES DESPLEGABLES */}
        <TouchableOpacity
          style={styles.menuBottom}
          onPress={() => {
            props.navigation.navigate("DirectMessages");
          }}
        >
          <View style={styles.menuBottomOption}>
            <Image source={messagesIcon} />
            <Text style={styles.menuText}>Mensajes Directos</Text>
          </View>
          <Image source={rightDrawer} />
        </TouchableOpacity>
      </View>
      <View style={[styles.extra, state ? { bottom: 15 } : { marginTop: 154 }]}>
        <TouchableOpacity style={styles.menuBottom} onPress={() => {}}>
          <View style={styles.menuBottomOption}>
            <Image source={logOutIcon} />
            <Text style={styles.menuTextExtra}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBottom}
          onPress={(e) => handleLogout(e)}
        >
          <View style={styles.menuBottomOption}>
            <Image source={helpIcon} />
            <Text style={styles.menuTextExtra}>Ayuda</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
