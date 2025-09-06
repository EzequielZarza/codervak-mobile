import { createSlice } from "@reduxjs/toolkit";

import categories from '../../data/categories.json';
import products from '../../data/products.json';

const shopSlice = createSlice({
  name: 'Shop',
  initialState:{
    categories,
    products,
    selectedCategory: ''
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    }
  }
});

export const { setSelectedCategory } = shopSlice.actions;
export default shopSlice.reducer