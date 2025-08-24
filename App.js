import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header title={'Codervak'}/>
      <CategoriesScreen/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
