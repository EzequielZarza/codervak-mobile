import { StatusBar } from 'expo-status-bar';
import Header from './src/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useEffect, useState } from 'react';

export default function App() {
  const [selectedCategory, setSelecedCategory] = useState("");

  return (
    <>
      <Header title={'Codervak'}/>
      {selectedCategory ? <ProductsScreen selectedCategory={selectedCategory}/> : <CategoriesScreen setSelecedCategory={setSelecedCategory}/>}
      <StatusBar style="light" />
    </>
  );
}
