import abountImg from '../assets/img/nosotros.jpg';

import { motion } from 'framer-motion';
import animations from '../utils/animations';

const Abount = () => {
  let ruteName = '/home';

  return (
    <motion.section className={`section-abount `} initial={animations.basic.main[0][0]} transition={animations.basic.main[1]} whileInView={animations.basic.main[2]}>
      <img src={abountImg} alt='imagen' />
      <motion.div initial={animations.basic.text[0]} transition={animations.basic.text[1]} whileInView={animations.basic.text[2]}>
        <h2>Sobre nosotros</h2>
        {ruteName === '/home' ? (
          <p>
            En nuestro sitio web, encontrarás una amplia variedad de muebles para todos los gustos y presupuestos. Desde camas, sofás, sillas, mesas, hasta accesorios para el hogar. Ofrecemos una experiencia de compra sencilla y segura, con envíos a
            todo el país.
          </p>
        ) : (
          <p>
            "Hola, somos Elisium, un marketplace de muebles que conecta a fabricantes de todo tipo de muebles con el consumidor final, siempre ofreciendo los mejores precios y calidad en el producto. En nuestro sitio web, encontrarás una amplia
            variedad de muebles para todos los gustos y presupuestos. Desde camas, sofás, sillas, mesas, hasta accesorios para el hogar. Ofrecemos una experiencia de compra sencilla y segura, con envíos a todo el país. ¡Aquí en nuestro sitio web y
            descubre el mueble perfecto para tu hogar!"
          </p>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Abount;
