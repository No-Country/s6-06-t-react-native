import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/profile_navigation/profile/index";
import PersonalInformation2 from "../../screens/profile_navigation/personal_information/index";
import ProfessionalProfile from "../../screens/profile_navigation/professional_profile/index";
import MyAplications from "../../screens/profile_navigation/my_aplications/index";
import Saved from "../../screens/profile_navigation/saved/index";
import Setting from "../../screens/profile_navigation/setting/index";

const ProfileNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation2} />
      <Stack.Screen name="ProfessionalProfile" component={ProfessionalProfile} />
      <Stack.Screen name="MyAplications" component={MyAplications} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};
export default ProfileNavigation;
