import { StyleSheet, Text, View, FlatList, Image, Pressable, Button } from "react-native";
import products from '../../data/products.json';
import { useEffect, useState } from 'react';
import FlatCard from '../../FlatCard';
import { colors } from "../../global/colors";
import Search from "../../Search";
import CodervakTypography from "../../CodervakTypography";

const ProductsScreen = ({route: {params: {category: selectedCategory}}, navigation: {navigate}}) => {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    const productsInCategory = products.filter(({category}) => category.toLowerCase() === selectedCategory.toLowerCase());
    if(keyword){
      const productsInCategoryByKeyword = productsInCategory.filter(({title}) => title.toLowerCase().includes(keyword.toLowerCase()));
      setSelectedProducts(productsInCategoryByKeyword)
    }else{
      setSelectedProducts(productsInCategory);
    }
  },[keyword]);

  const renderCategoriesItem = (({item}) => (
    <Pressable onPress={() => navigate('ProductDetails')}>
    <View style={styles.container}>
      <FlatCard>
        <View style={styles.container}>
          <Image width={150} height={150} resizeMode='center' source={{uri: item?.image}}></Image>
        </View>
        <View style={styles.container}>
          <CodervakTypography fontFamily='Space-Mono-Bold'>{item?.title}</CodervakTypography>
          <CodervakTypography style={{textAlign: "center", marginLeft: 8}}>{item?.description}</CodervakTypography>
          <View style={{marginTop: 16}}>
          <CodervakTypography>{`Precio: ${item?.price} US$`}</CodervakTypography>
          <CodervakTypography>{`Stock: ${item?.stock}`}</CodervakTypography>
        </View>
        </View>
      </FlatCard>
      </View>
      </Pressable>

  ))

  return (
    <>
    <View backgroundColor={colors.lightGray} >
    {/* <Pressable
      onPress={() => setSelecedCategory('')}
      style={styles.button}
      >
      <CodervakTypography fontFamily='Space-Mono-Bold' style={styles.buttonText}> Volver al menu principal</CodervakTypography>
    </Pressable> */}
    <Search setKeyword={setKeyword}/>
    </View>
    <FlatList
      data={selectedProducts}
      renderItem={renderCategoriesItem}
      keyExtractor={item=>item.id}
    />
    </>
  );
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.darkBlue,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 16,
    marginVertical: 16
  },
  buttonPressed: {
    backgroundColor: '#0056b3', // Darker color when pressed
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    }
});
