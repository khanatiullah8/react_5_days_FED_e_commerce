import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  modalItems: [],
  isVisible: false,
  currentIndex: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalItems = action.payload.items;
      state.isVisible = true;
      state.currentIndex = action.payload.index;
    },
    closeModal: (state) => {
      state.modalItems = [];
      state.isVisible = false;
      state.currentIndex = null;
    },
    prevSlide: (state) => {
      state.currentIndex -= 1;
      if(state.currentIndex < 0) state.currentIndex = state.modalItems.length - 1;
    }, 
    nextSlide: (state) => {
      state.currentIndex += 1;
      if(state.currentIndex > state.modalItems.length - 1) state.currentIndex = 0;
    } 
  }
});

export default modalSlice.reducer
export const { openModal, closeModal, prevSlide, nextSlide } = modalSlice.actions