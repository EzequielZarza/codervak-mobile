import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../../global/colors'
import FlatCard from '../../FlatCard'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeItem } from '../../store/slices/cartSlice'
import { usePostPurchaseMutation } from '../../services/shopApi';
import { useState } from 'react';

const CartScreen = () => {

  const [ triggerPurchase ] = usePostPurchaseMutation()
  const cartItems = useSelector(state=>state.cartReducer.cartItems)
  const total = useSelector(state=>state.cartReducer.total);
  const [purchaseDone, setPurchaseDone ] = useState(false)

  const dispatch = useDispatch();

  const purchase = () => {
    console.log('compranding')
    triggerPurchase({products: cartItems, total})
    setPurchaseDone(true)
    dispatch(clearCart())
  }

  const removeItems = () => {
    dispatch(clearCart());
    setPurchaseDone(false)
  }
  
  const FooterComponent = () => (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTotal}>Total: $ {total} </Text>
      <Pressable onPress={purchase}style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </Pressable>
      <Pressable
        style={styles.cleanCartButton}
        onPress={removeItems}
      >
        <Text style={styles.confirmButtonText}>Vaciar carrito</Text>
      </Pressable>
    </View>
  )

  const renderCartItem = ({ item }) => (
    <FlatCard style={styles.cartContainer}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.cartImage}
          resizeMode='cover'
        />
      </View>
      <View style={styles.cartDescription}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.shortDescription}</Text>
        <Text style={styles.price}>Precio unitario: $ {item.price}</Text>
        <Text stlyle={styles.quantity}>Cantidad: {item.quantity}</Text>
        <Text style={styles.total}>Total: $ {item.quantity * item.price}</Text>
        <Pressable onPress={() => dispatch(removeItem(item))}>
          <MaterialCommunityIcons name="delete" size={24} color={colors.black} style={styles.trashIcon} />
        </Pressable>
      </View>
    </FlatCard>
  )

  return (
    <>
      {
        cartItems.length>0
          ?
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderCartItem}
            ListHeaderComponent={<Text style={styles.cartScreenTitle}>Tu carrito:</Text>}
            ListFooterComponent={<FooterComponent />}
          />

          :
          purchaseDone ? 
          <Text style={styles.cartScreenTitle}>Compra realizada con exito!</Text>

          :
          <Text style={styles.cartScreenTitle}>Aún no hay productos en el carrito</Text>
      }
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: "flex-start",
    margin: 16,
    alignItems: "center",
    gap: 10
  },
  cartImage: {
    width: 80,
    height: 80
  },
  cartDescription: {
    width: '80%',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700'
  },
  description: {
    marginBottom: 16,
  },
  total: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700'
  },
  trashIcon: {
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  footerContainer: {
    padding: 32,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerTotal: {
    fontSize: 16,
    fontWeight: '700'
  },
  confirmButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.darkBlue,
    borderRadius: 16,
    marginBottom: 24,
  },
  cleanCartButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.red,
    borderRadius: 16,
    marginBottom: 24,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700'
  }, cartScreenTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: "center",
    paddingVertical: 8
  }

})