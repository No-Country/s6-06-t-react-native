import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgregarEducacion from "../../screens/profile_navigation/agregarEducacion";
import AgregarExperiencia from "../../screens/profile_navigation/agregarExperiencia";
import ListaInfoEducacion from "../../screens/profile_navigation/listaEducacion";
import ListaInfoLaboral from "../../screens/profile_navigation/listaExpLaboral";
import MisPostulaciones from "../../screens/profile_navigation/my_aplications/MisPostulaciones";
import DatosPersonales from "../../screens/profile_navigation/personal_information/DatosPersonales";
import PerfilProfesional from "../../screens/profile_navigation/professional_profile/PerfilProfesional";
import Perfil from "../../screens/profile_navigation/profile/Profile";
import Guardados from "../../screens/profile_navigation/saved/Guardados";
import Configuracion from "../../screens/profile_navigation/setting/Configuracion";

const ProfileNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="DatosPersonales" component={DatosPersonales} />
      <Stack.Screen name="PerfilProfesional" component={PerfilProfesional} />
      <Stack.Screen name="MisPostulaciones" component={MisPostulaciones} />
      <Stack.Screen name="Guardados" component={Guardados} />
      <Stack.Screen name="Configuracion" component={Configuracion} />
      <Stack.Screen name="AddExperience" component={AgregarExperiencia} />
      <Stack.Screen name="AddEducation" component={AgregarEducacion} />
      <Stack.Screen name="SeeAllWorkExp" component={ListaInfoLaboral} />
      <Stack.Screen name="SeeAllEducation" component={ListaInfoEducacion} />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
