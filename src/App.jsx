import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Store from './pages/Store';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import Book from './pages/Book';

import { useDispatch } from 'react-redux';
import { setCartThunk } from './store/slices/cart.slice';
import Float from './components/Float';
import ViewPhoto from './pages/ViewPhoto';

const App = () => {
  const dispatch = useDispatch();

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  dispatch(setCartThunk(cart));

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store/:category' element={<Store />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/book' element={<Book />} />
        <Route path='/view/photo/:id' element={<ViewPhoto />} />
      </Routes>
      <Float />
      <Footer />
    </HashRouter>
  );
};

export default App;
