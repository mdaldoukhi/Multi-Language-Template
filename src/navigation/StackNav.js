import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { HomeScreen, LanguageScreen } from "../pages";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => <HeaderLeft navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Language" component={LanguageScreen} />
    </Stack.Navigator>
  );
};

// show the icon on the header and when press will navigate to language screen => left means in Enlgish will be on the left side
const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.replace("Language")}
      style={{ marginHorizontal: 5 }}
    >
      <Ionicons name="globe-outline" size={22} color="#0275d8" />
    </TouchableOpacity>
  );
};

export default StackNav;
