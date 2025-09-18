import { Text, FlatList, Image, View, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import products from '../../data/products.json'
import FlatCard from '../../FlatCard';
import { useState, useEffect } from 'react';
import CodervakTypography from '../../CodervakTypography';
import { setSelectedCategory } from '../../store/slices/shopSlice';
import { useCategoriesQuery, useProductsQuery } from '../../services/shopApi';
import Spinner from '../../Spinner';

const CategoriesScreen = ({navigation: {navigate}}) => {

  //const categories = useSelector(({shopReducer: {categories}}) => categories);
  const {data: categories, isLoading, error} = useCategoriesQuery()
  const {data: products, isLoading: isLoadingProducts} = useProductsQuery()


  const dispatch = useDispatch();

  const handleSelectedCategory = ({title}) => {
    dispatch(setSelectedCategory(title))
    navigate('Products', { category: title})
  };

  const [dynamicCategories, setDynamicCategories] = useState([])
  useEffect(() => {
    const shuffledProducts = isLoadingProducts ? [] : [...products].sort(() => Math.random() - 0.5) ;
    const updatedCategories = categories?.reduce((accum,curr) => {
      const filteredProduct = shuffledProducts.find(product => product?.category === curr.title);
      const updatedCategory = {...curr, image: filteredProduct?.image}
      accum = [...accum, updatedCategory]
      return accum
    },[])
    setDynamicCategories(updatedCategories)
  },[products, categories])
  

  const renderCategoriesItem = (({item}) => (
    <Pressable onPress={() => handleSelectedCategory(item)}>
      <FlatCard>
        <CodervakTypography>{item?.title}</CodervakTypography>
        <Image width={100} height={50} resizeMode='contain' source={{uri: item?.image}}></Image>
      </FlatCard>
  </Pressable>
  ))

  return (isLoading ? <Spinner/> :
    <FlatList
      data={dynamicCategories?.length > 0 ? dynamicCategories : categories}
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
