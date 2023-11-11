import productos from '../data/products';

import { motion } from 'framer-motion';
import animations from '../utils/animations';
import addToCart from '../utils/addToCart';

import { useDispatch } from 'react-redux';

const Productos = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <article className='article-products'>
      <h2 className='title-products'>Nuestros Productos</h2>
      <motion.section className='section-product-outstanding' initial={animations.basic.main[0][1]} transition={animations.basic.main[1]} whileInView={animations.basic.main[2]}>
        {productos.map(
          product =>
            product.status === 'destacado' && (
              <div key={product.id}>
                <img src={product.imgSrc} alt={`imagen de ${product.title}`} />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description()}</p>
                  <button className='btn-add btn-outstanding' onClick={() => addToCart(product, 'add', dispatch)}>
                    Add
                  </button>
                </div>
              </div>
            )
        )}
      </motion.section>
      <section className='section-product-secondary'>
        {productos.map(
          product =>
            product.status === 'secondary' && (
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
      </section>
      <section className='section-products'>
        {products.map(
          product =>
            product.status === 'productos' && (
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
      </section>
    </article>
  );
};

export default Productos;
