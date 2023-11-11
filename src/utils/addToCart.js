import { setCartThunk } from '../store/slices/cart.slice';
import deleteItem from './deleteItem';

const addToCart = (product, option, dispatch) => {
  // Parsear el JSON del carrito una vez y almacenar el resultado en una variable.
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Crear un mapa para almacenar los índices de los productos en el carrito.
  const productIndexMap = new Map();
  cart.forEach((item, index) => {
    productIndexMap.set(item.id, index);
  });

  // Obtener el índice del producto actual en el carrito.
  const currentProductIndex = productIndexMap.get(product.id);

  // Si el producto actual no está en el carrito, agregarlo.
  if (currentProductIndex === undefined) {
    cart.push({ ...product, quantity: 1 });
  } else {
    // Actualizar la cantidad del producto actual en el carrito.
    if (option === 'add') {
      cart[currentProductIndex].quantity++;
    } else if (option === 'decrase') {
      // Si la cantidad del producto actual es 0, eliminarlo del carrito.
      if (cart[currentProductIndex].quantity === 1) {
        deleteItem(cart, product.id, dispatch);
        return;
      } else {
        cart[currentProductIndex].quantity--;
      }
    }
  }

  cart.forEach(item => {
    delete item.description;
  });

  // Almacenar el carrito actualizado en el almacenamiento local.
  localStorage.setItem('cart', JSON.stringify(cart));

  // Dispachar la acción `setCartThunk` para actualizar el carrito en la tienda Redux.
  dispatch(setCartThunk(cart));
};

export default addToCart;
