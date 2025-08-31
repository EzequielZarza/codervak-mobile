import { Text, FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import categories from '../../data/categories.json';
import products from '../../data/products.json'
import FlatCard from '../../FlatCard';
import { useState, useEffect } from 'react';
import CodervakTypography from '../../CodervakTypography';

const CategoriesScreen = ({navigation: {navigate}}) => {

  const [dynamicCategories, setDynamicCategories] = useState([])
  useEffect(() => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    const updatedCategories = categories.reduce((accum,curr) => {
      const filteredProduct = shuffledProducts.find(product => product.category === curr.title);
      const updatedCategory = {...curr, image: filteredProduct.image}
      accum = [...accum, updatedCategory]
      return accum
    },[])
    setDynamicCategories(updatedCategories)
  },[])
  

  const renderCategoriesItem = (({item}) => (
    <Pressable onPress={() => navigate('Products', { category: item?.title})}>
      <FlatCard>
        <CodervakTypography>{item?.title}</CodervakTypography>
        <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
      </FlatCard>
  </Pressable>
  ))

  return (
    <FlatList
      data={dynamicCategories.length > 0 ? dynamicCategories : categories}
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
