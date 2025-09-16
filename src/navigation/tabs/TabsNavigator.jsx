import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import ShopStackNavigator from '../shop/ShopStackNavigator';
import CartStackNavigator from '../cart/CartStackNavigator';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();

const TabsNavigator = () => {

  return (
      // <NavigationContainer>
        <Navigator screenOptions={{headerShown: false, tabBarStyle: styles.tabBar}}>
          <Screen
            name="Shop"
            component={ShopStackNavigator}

            options={{
              tabBarIcon: ()=>(<Entypo name="shop" size={24} color="black" />)
            }}
          />
          <Screen
            name="Cart"
            component={CartStackNavigator}
            options={{
              tabBarIcon: ()=>(<Entypo name="shopping-cart" size={24} color="black" />)
            }}
            />
        </Navigator>
    // </NavigationContainer>
  );
}

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height:88
  }
})