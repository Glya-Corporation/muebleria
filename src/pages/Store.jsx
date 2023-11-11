import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Productos from '../components/Productos';
import productos from '../data/products';
import animations from '../utils/animations';
import addToCart from '../utils/addToCart';

const Store = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const products = productos;

  return (
    <div>
      {param.category === 'all' ? (
        <Productos products={products} />
      ) : (
        <div>
          <h2 style={{ textAlign: 'center', paddingTop: '3rem' }}>{param.category}</h2>
          <div className='section-products all-products filter'>
            {productos.map(
              product =>
                product.category === param.category && (
                  <motion.div key={product.id} initial={animations.basic.main[0][1]} transition={animations.basic.main[1]} whileInView={animations.basic.main[2]}>
                    <img src={product.imgSrc} alt={`imagen de ${product.title}`} />
                    <div className={product.id % 2 === 0 ? 'child1' : 'child2'}>
                      <h3>{product.title}</h3>
                      <p>{product.description()}</p>
                      <button className='btn-add' onClick={() => addToCart(product, 'add', dispatch)}>
                        Add
                      </button>
                    </div>
                  </motion.div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
