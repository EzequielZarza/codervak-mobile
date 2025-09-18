import { StyleSheet, Text, View, Pressable, Image, ScrollView, useWindowDimensions } from 'react-native'
import { colors } from '../../global/colors'
import { useSelector,useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/slices/cartSlice'
import { useState } from 'react'
import CodervakTypography from "../../CodervakTypography";
  
const ProductDetailsScreen = () => {
    const product = useSelector(state=>state.shopReducer.selectedProduct)
    const [stock, setStock] = useState(product.stock)

    const { width } = useWindowDimensions()
    const dispatch = useDispatch()
    return (
        <ScrollView style={styles.productContainer}>
            <Text style={styles.textBrand}>{product?.brand}</Text>
            <Text style={styles.textTitle}>{product.title}</Text>
            <Image
                source={{ uri: product.image }}
                alt={product.title}
                width='100%'
                height={width * .7}
                resizeMode='contain'
            />
            <CodervakTypography style={{textAlign: "center", marginLeft: 8}}>{product?.description}</CodervakTypography>
            {
                stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>
            }
            <View style={{ alignItems: 'center'}}>
            <Text style={styles.price}>Precio: ${product.price}</Text>
            <Text style={styles.stock}>Stock: {stock}</Text>
            </View>
            
            <Pressable
                disabled={stock === 0}
                style={({ pressed }) => [{ opacity: pressed ? 0.95 : 1 }, styles.addToCartButton, stock === 0 && styles.buttonDisabled]}
                onPress={()=> {
                  dispatch(addItemToCart({product:product,quantity:1, stock: stock-1}))
                  setStock(stock-1);
                }
                }>
                <Text style={styles.textAddToCart}>Agregar al carrito</Text>
            </Pressable>
        </ScrollView>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    productContainer: {
        paddingHorizontal: 16,
        marginVertical: 16
    },
    textBrand: {
        color: colors.grisOscuro,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: '700'
    },
    longDescription: {
        fontSize: 16,
        textAlign: 'justify',
        paddingVertical: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    tags: {
        flexDirection: 'row',
        gap: 5,
    },
    tagText: {
        fontWeight: '600',
        fontSize: 14,
        color: colors.purple
    },
    price: {
        fontWeight: '800',
        fontSize: 18
    },
    stock: {
      fontWeight: '800',
      fontSize: 16
  },
    discount: {
        backgroundColor: colors.brightOrange,
        width: 52,
        height: 52,
        borderRadius: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    discountText: {
        color: colors.white,
        textAlign: 'center',
        verticalAlign: 'center'
    },
    noStockText: {
        color: colors.red
    },
    price: {
        fontSize: 24,
        fontWeight: '700',
        alignSelf: 'center',
        paddingVertical: 16
    },
    addToCartButton: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.darkBlue,
        borderRadius: 16,
        marginVertical: 16
    },
    textAddToCart: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center',
    },
    buttonDisabled: {
      backgroundColor: colors.darkGray, 
      opacity: 0.6,
    },
})