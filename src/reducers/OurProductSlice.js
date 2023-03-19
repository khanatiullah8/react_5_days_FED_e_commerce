import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

let initialState = {
  product: [],
  loading: false,
  error: "",
};

const fetchProducts = createAsyncThunk('product/all', async () => {
  const res = await axios.get(`https://dummyjson.com/products?limit=100`);
  return res.data.products;
})

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer
export { fetchProducts }