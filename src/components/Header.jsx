import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import shoppingCart from '../assets/icons/shopping_cart.svg';

import menuIcon from '../assets/icons/menu.svg';
import CartShop from './CartShop';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [totalElements, setTotalElements] = useState(0);

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sum = () => {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity;
      }

      setTotalElements(total);
    };

    sum();
  }, [cart]);

  const navigate = useNavigate();

  const goRute = rute => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setShowMenu(false);
    navigate(rute);
  };

  return (
    <>
      <header className='contenedor-navegacion'>
        <nav className='nav-principal contenedor'>
          <h1 className='nombre-sitio' onClick={() => goRute('/')}>
            <span className='child-1'>Elysium</span>
            <span className='child-2'> Muebles </span>
          </h1>
          <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
            <li className='nav-list-item' onClick={() => goRute('/')}>
              Inicio
            </li>
            <li className='nav-list-item' onClick={() => goRute('/store/all')}>
              Tienda
            </li>
            <li className='nav-list-item' onClick={() => goRute('/book')}>
              Colores
            </li>
            <li className='nav-list-item' onClick={() => goRute('/contacts')}>
              Contáctos
            </li>
          </ul>
          <div className='icon-cart' onClick={() => setShow(true)}>
            <img src={shoppingCart} alt='icono del cart' />
            <span>{totalElements}</span>
          </div>
          <img src={menuIcon} alt='icono del menu' className='icon-menu' onClick={() => setShowMenu(!showMenu)} />
        </nav>
      </header>
      <CartShop show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Header;
