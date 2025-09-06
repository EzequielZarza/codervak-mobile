import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { CartScreen  } from "../../screens";
import { colors } from "../../global/colors";
import Header from "../../Header";

const {Navigator, Screen} = createNativeStackNavigator();

const CartStackNavigator = () => 
  // <NavigationContainer>
    <Navigator
      initialRouteName='Cart'
      screenOptions={{
        header: (() => (<Header title='Codervak' subtitle='Cart'/>)),
        headerStyle: {
          backgroundColor: colors.lightGray
        },
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
          fontSize: 20,
          color: colors.black,
          fontFamily: 'Space-Mono-Bold'
        }
      }}
    >
      <Screen name='Cart' component={CartScreen} />
    </Navigator>
  // </NavigationContainer>

export default CartStackNavigator;