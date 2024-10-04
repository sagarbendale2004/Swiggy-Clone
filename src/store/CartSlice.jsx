import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === (product.path || product.name)
      );

      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if exists
      } else {
        // Add new product with a quantity of 1
        state.items.push({ ...product, quantity: 1 });
      }
    },

    remove: (state, action) => {
      const i = action.payload;
      const existingItem = state.items.find((item) => item.id === i);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity by 1
        } else {
          state.items = state.items.filter((item) => item.id !== i); // Remove item if quantity is 0
        }
      }
    },

    clearCart: (state) => {
      state.items = []; // Clear the cart items
    },
  },
});

// Exporting actions and reducer
export const { add, remove, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
