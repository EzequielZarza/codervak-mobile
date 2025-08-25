import { Text, FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import categories from '../data/categories.json';
import FlatCard from '../FlatCard';

const CategoriesScreen = ({setSelecedCategory}) => {
  const renderCategoriesItem = (({item}) => (
    <Pressable onPress={() => setSelecedCategory(item?.title)}>
      <FlatCard>
        <Text>{item?.title}</Text>
        <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
      </FlatCard>
  </Pressable>
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
