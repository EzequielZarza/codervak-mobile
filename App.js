import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import categories from './src/data/categories.json';
import Header from './src/Header';
import FlatCard from './src/FlatCard';

export default function App() {
  const renderCategoriesItem = (({item}) => (
  <FlatCard>
    <Text>{item?.title}</Text>
    <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
  </FlatCard>))

  return (
    <View style={styles.container}>
      <Header title={'Codervak'}/>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item=>item.id}
      />
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
