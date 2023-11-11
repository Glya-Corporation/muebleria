import category1 from '../assets/img/producto2.jpg';
import category2 from '../assets/img/categoria2.jpg';
import category3 from '../assets/img/categoria3.jpg';

import { motion } from 'framer-motion';
import animations from '../utils/animations';
import { useNavigate } from 'react-router-dom';

const categoriasAllImg = [
  { id: 1, name: 'Dormitorio', img: category1 },
  { id: 2, name: 'Sala', img: category2 },
  { id: 3, name: 'Comedor', img: category3 }
];

const Categories = () => {
  const navigate = useNavigate();

  const goRute = rute => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(rute);
  };

  return (
    <section className='section-categories'>
      <h2 className='title-categories'>Categorías de Productos</h2>
      <div className='container-categories'>
        {categoriasAllImg.map(item => (
          <motion.div key={item.id} className='container-category' initial={animations.basic.main[0][0]} transition={animations.basic.main[1]} whileInView={animations.basic.main[2]}>
            <img src={item.img} alt='imagen' />
            <p onClick={() => goRute(`/store/${item.name}`)}>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
