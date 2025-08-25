import { Text, FlatList, Image, View, StyleSheet } from 'react-native';
import categories from '../data/categories.json';
import FlatCard from '../FlatCard';

const CategoriesScreen = () => {
  const renderCategoriesItem = (({item}) => (
    <View style={styles.container}>
      <FlatCard>
        <Text>{item?.title}</Text>
        <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
      </FlatCard>
  </View>
  ))

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoriesItem}
      keyExtractor={item=>item.id}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
