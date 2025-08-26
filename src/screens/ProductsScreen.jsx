import { StyleSheet, Text, View, FlatList, Image, Pressable, Button } from "react-native";
import products from '../data/products.json';
import { useEffect, useState } from 'react';
import FlatCard from '../FlatCard';
import { colors } from "../global/colors";
import Search from "../Search";

const ProductsScreen = ({selectedCategory, setSelecedCategory}) => {
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
    <View style={styles.container}>

      <FlatCard>
        <View style={styles.container}>
        <Text>{item?.title}</Text>
        <Image width={150} height={150} resizeMode='contain' source={{uri: item?.image}}></Image>
        </View>
        <View style={styles.container}>

        <Text style={{textAlign: "center", marginLeft: 8}}>{item?.description}</Text>
        <View style={{marginTop: 16}}>
        <Text>{`Precio: ${item?.price} US$`}</Text>
        <Text>{`Stock: ${item?.stock}`}</Text>
        </View>
        </View>
      </FlatCard>
      </View>

  ))

  return (
    <>
    <View backgroundColor={colors.lightGray} >
    <Pressable
      onPress={() => setSelecedCategory('')}
      style={styles.button}
      >
      <Text style={styles.buttonText}> Volver al menu principal</Text>
    </Pressable>
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
    fontWeight: 'bold'
    }
});
