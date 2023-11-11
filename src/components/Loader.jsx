import loader from '../assets/loader/loader.png';
import logo from '../assets//loader/logo.png';

const Loader = () => {
  return (
    <main className='loader-container'>
      <div className='loader'>
        <img src={loader} alt='Imagen de carga' className='loader-img--b' />
        <img src={logo} alt='Imagen de carga' className='loader-img--logo' />
      </div>
    </main>
  );
};

export default Loader;
