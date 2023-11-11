import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';

import addToCart from '../utils/addToCart';
import deleteItem from '../utils/deleteItem';
import generateUrl from '../utils/generateUrl';
import { setCartThunk } from '../store/slices/cart.slice';

const CartShop = ({ ...props }) => {
  const width = window.innerWidth;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const sendMessage = () => {
    const url = generateUrl(cart);
    window.open(url);
    setTimeout(() => {
      dispatch(setCartThunk([]));
      localStorage.setItem('cart', JSON.stringify([]));
    }, 5000);
  };

  return (
    <Offcanvas {...props} placement={width >= 600 ? 'bottom' : 'start'}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart Shoping</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className='cart--list-products'>
          {cart.map((product, index) => (
            <li className='cart--item-product' key={product.id}>
              <img src={product.imgSrc || 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg'} alt='img produc' />
              <b>{product.title}</b>
              <div className='options-cart'>
                <div className='options-btn'>
                  <button className='options--btn' onClick={() => addToCart(product, 'decrase', dispatch)}>
                    -
                  </button>
                  <button className='options--btn' onClick={() => addToCart(product, 'add', dispatch)}>
                    +
                  </button>
                </div>
                <b>{product.quantity}</b>
              </div>
              <svg onClick={() => deleteItem(cart, product.id, dispatch)} height='30' viewBox='0 96 960 960' width='30'>
                <path d='M279.232 912.922q-22.961 0-39.558-16.596-16.596-16.597-16.596-39.558V315.001h-40.307v-43.615h168.922v-27.692h256.922v27.461h168.922v43.846h-40.308v541.856q0 22.601-16.732 39.333-16.731 16.732-39.421 16.732H279.232Zm414.152-597.921H266.923v541.767q0 5.385 3.655 8.847 3.654 3.462 8.654 3.462h401.844q4.615 0 8.462-3.847 3.846-3.846 3.846-8.462V315.001ZM382.77 784.731h43.845V397.654H382.77v387.077Zm150.922 0h43.845V397.654h-43.845v387.077Zm-266.769-469.73v554.076-554.076Z' />
              </svg>
            </li>
          ))}
        </ul>
      </Offcanvas.Body>
      <div className='footer-buy'>
        <button className='btn btn-buy' onClick={() => sendMessage()} disabled={cart.length < 1}>
          Comprar
        </button>
      </div>
    </Offcanvas>
  );
};

export default CartShop;
