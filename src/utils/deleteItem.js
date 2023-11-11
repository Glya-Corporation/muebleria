import { setCartThunk } from '../store/slices/cart.slice';

const deleteItem = async (cart, id, dispatch) => {
  const newArray = cart.filter(item => item.id !== id);
  dispatch(setCartThunk(newArray));
  localStorage.setItem('cart', JSON.stringify(newArray));
  return newArray;
};

export default deleteItem;
