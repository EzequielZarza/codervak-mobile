import { StatusBar } from 'expo-status-bar';
import Header from './src/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <>
      <Header title={'Codervak'}/>
      <CategoriesScreen/>
      <ProductsScreen/>
      <StatusBar style="light" />
    </>
  );
}
