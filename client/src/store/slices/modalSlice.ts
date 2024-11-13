import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    openModal: string;
    status: string;
    error: null | string;
  }

const initialState: ModalState = {
    openModal: "",
    status: "idle",
    error: null
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.openModal = action.payload;
    },
    closeModal: (state) => {
      state.openModal = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
