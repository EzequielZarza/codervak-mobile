import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import products from '../data/products.json';
import { useEffect, useState } from 'react';
import FlatCard from '../FlatCard';
import { colors } from "../global/colors";

const ProductsScreen = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const productsInCategory = products.filter(({category}) => category==='Cars');
    setSelectedProducts(productsInCategory);
  },[]);

  const renderCategoriesItem = (({item}) => (
    <View style={styles.container}>

      <FlatCard>
        <View style={styles.container}>
        <Text>{item?.title}</Text>
        <Image width={200} height={150} resizeMode='contain' source={{uri: item?.image}}></Image>
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
    <FlatList
      data={selectedProducts}
      renderItem={renderCategoriesItem}
      keyExtractor={item=>item.id}
    />
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
});
