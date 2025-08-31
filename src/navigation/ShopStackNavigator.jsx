import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens";
import { colors } from "../global/colors";

const {Navigator, Screen} = createNativeStackNavigator();

const ShopStackNavigator = () => 
  <NavigationContainer>
    <Navigator
      initialRouteName='Categories'
      screenOptions={{
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
      <Screen name='Categories' component={CategoriesScreen} />
      <Screen name='Products' component={ProductsScreen}/>
      {/* <Screen name='ProductDetails' component={ProductDetailsScreen}/> */}
    </Navigator>
  </NavigationContainer>

export default ShopStackNavigator;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.darkBlue,
//     height: 140,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     marginTop: 8,
//     fontSize: 24,
//     color: colors.white,
//     fontFamily: 'Space-Mono-Bold'
//   }
// })