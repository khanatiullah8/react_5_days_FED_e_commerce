import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const checkedItem = state.cart.find(item => item.id === action.payload.id)

      if (checkedItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    removeAllCart: (state, action) => {
      state.cart = action.payload;
    },
  }
});

export default cartSlice.reducer
export const { addToCart, removeFromCart, removeAllCart, incrementQty, decrementQty } = cartSlice.actions