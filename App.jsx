import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import Header from './src/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [selectedCategory, setSelecedCategory] = useState("");
  const [loaded, error] = useFonts({
    'Space-Mono-Regular': require('./assets/fonts/spaceMono/SpaceMono-Regular.ttf'),
    'Space-Mono-Bold': require('./assets/fonts/spaceMono/SpaceMono-Bold.ttf'),
    'Space-Mono-BoldItalic': require('./assets/fonts/spaceMono/SpaceMono-BoldItalic.ttf'),
    'Space-Mono-Italic': require('./assets/fonts/spaceMono/SpaceMono-Italic.ttf')
  })

  useEffect(() => {
    if(loaded || error){
      SplashScreen.hideAsync();
    };
  }, [loaded, error]);

  return (
    <>
      <Header title={'Codervak'}/>
      {selectedCategory ?
        <ProductsScreen setSelecedCategory={setSelecedCategory} selectedCategory={selectedCategory}/>
        : 
          <CategoriesScreen setSelecedCategory={setSelecedCategory}/>
      }
      <StatusBar style="light" />
    </>
  );
}
