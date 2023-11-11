import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, actions) => {
      return actions.payload;
    }
  }
});

export const setCartThunk = cart => dispatch => {
  dispatch(setCart(cart));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
