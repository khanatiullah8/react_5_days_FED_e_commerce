import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/OurProductSlice';
import cartReducer from '../reducers/CartSlice';
import filterProductReducer from '../reducers/FilterProductSlice';
import modalReducer from '../reducers/ModalSlice';
import userReducer from '../reducers/UserSlice';

const store = configureStore({
  reducer: {
    userDetails: userReducer,
    products: productReducer,
    cartProducts: cartReducer,
    filterProduct: filterProductReducer,
    modal: modalReducer,
  },
});

export default store;