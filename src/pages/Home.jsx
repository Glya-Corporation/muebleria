import homeImg from '../assets/img/mueblelujo1.jpg';
import Categories from '../components/Categories';
import Abount from '../components/Abount';
import Productos from '../components/Productos';

import { motion } from 'framer-motion';
import animations from '../utils/animations';
import productos from '../data/products';

import video from '../assets/img/mueble_electrico.mp4';

const Home = () => {
  const products = productos.filter(item => item.status === 'productos').slice(0, 3);

  return (
    <main className='container-home'>
      <motion.img className='img-portadas' src={homeImg} alt='imagen' initial={animations.basic.main[0][1]} transition={animations.basic.main[1]} whileInView={animations.basic.main[2]} />
      <Categories />
      <hr />
      <br />
      <br />
      <Abount />
      <Productos products={products} />
      <hr />
      <div className='video'>
        <video src={video} autoPlay={true} loop={true} controls muted></video>
      </div>
    </main>
  );
};

export default Home;
