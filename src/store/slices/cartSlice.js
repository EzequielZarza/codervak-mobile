import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    user: 'Placeholer user',
    udpatedAt: new Date().toLocaleDateString(),
    cartItems: [],
    total: 0
  },
  reducers: {
    addItemToCart: (state, actions) => {
      const {product, quantity, stock} = actions.payload;

      const productInCart = state.cartItems.find(({id}) => id===product.id);
      if(!productInCart){
        //immer lib in redux metiendo magia que nos permite hacer push a vars de estado
        state.cartItems.push({...product, quantity, stock})
      }else{
        productInCart.quantity+=1
        productInCart.stock-=1
      }
      state.udpatedAt = new Date().toLocaleDateString()
      state.total = state.cartItems.reduce((accum, curr) => accum + curr.price*curr.quantity, 0);
    },
    removeItem: (state, actions) => {
      state.cartItems = state.cartItems.filter(({id}) => id!==actions.payload.id);
      state.total = state.cartItems.reduce((accum, curr) => accum + curr.price*curr.quantity, 0);
      state.udpatedAt = new Date().toLocaleDateString()
    },
    clearCart: (state, actions) => {
      state.cartItems = [];
      state.total = 0
      state.udpatedAt = new Date().toLocaleDateString()
    }

  }
});

export const { addItemToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer