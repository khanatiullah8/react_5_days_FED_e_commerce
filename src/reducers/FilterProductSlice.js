import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    search: '',
    category: null,
    price: {},
  }

const filterProductSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    categoryFilter: (state, action) => {
      state.category = action.payload;
    },
    filterPriceSet: (state, action) => {
      state.price = action.payload;
    },
    priceFilter: (state, action) => {
      state.price = action.payload 
    },
    clearFilter: (state, action) => {
      state.search = '';
      state.category = null;
      state.price = action.payload; 
    },
  }
})

export default filterProductSlice.reducer;
export const { searchFilter, categoryFilter, filterPriceSet, priceFilter, clearFilter } = filterProductSlice.actions;

