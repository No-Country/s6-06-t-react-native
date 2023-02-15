import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DatosPersonales from "../../screens/profile_navigation/personal_information/DatosPersonales";
import PerfilProfesional from "../../screens/profile_navigation/professional_profile/PerfilProfesional";
import Profile from "../../screens/profile_navigation/profile/Profile";

const ProfileNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="DatosPersonales" component={DatosPersonales} />
      <Stack.Screen name="PerfilProfesional" component={PerfilProfesional} />
      {/* <Stack.Screen name="MyAplications" component={MyAplications} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="Setting" component={Setting} /> */}
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
