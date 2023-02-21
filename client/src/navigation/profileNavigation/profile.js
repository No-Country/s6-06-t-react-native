import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AgregarExperiencia from "../../screens/profile_navigation/agregarExperiencia";
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
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
