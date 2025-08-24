import { Text, FlatList, Image } from 'react-native';
import categories from '../data/categories.json';
import FlatCard from '../FlatCard';

export const CategoriesScreen = () => {
  const renderCategoriesItem = (({item}) => (
  <FlatCard>
    <Text>{item?.title}</Text>
    <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
  </FlatCard>))

  return (
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item=>item.id}
      />
  );
}

export default CategoriesScreen;