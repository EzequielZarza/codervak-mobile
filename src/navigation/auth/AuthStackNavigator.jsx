import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogInScreen, SignUpScreen } from "../../screens";

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }
            }
        >
            <Stack.Screen name="Login" component={LogInScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator