import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../../screens";
import Header from "../../Header";

const {Navigator, Screen} = createNativeStackNavigator()

const ProfileStackNavigator = () => {
    return (
        <Navigator
            initialRouteName="Profile"
            screenOptions={{
                header: ({route})=>(<Header title="Codervak" subtitle="Profile"/>)
            }}
        >
            <Screen name="Profile" component={ProfileScreen} />
        </Navigator>
    )
}

export default ProfileStackNavigator