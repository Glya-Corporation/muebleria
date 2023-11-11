import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultiModal from '../pages/MultiModal';

const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [pageIdentify, setPageIdentify] = useState('');
  const navigate = useNavigate();

  const goRute = rute => {
    navigate(rute);
  };

  const showModal = identify => {
    setModalShow(true);
    setPageIdentify(identify);
  };

  return (
    <>
      <MultiModal show={modalShow} onHide={() => setModalShow(false)} identify={pageIdentify} />
      <footer className='site-footer'>
        <div className='grid-footer contenedor'>
          <div>
            <h3>Categorías</h3>

            <nav className='footer-menu'>
              <ul>
                <li onClick={() => goRute('/store/all')}>Todos</li>
                <li onClick={() => goRute('/store/Sala')}>Sala</li>
                <li onClick={() => goRute('/store/Comedor')}>Comedor</li>
                <li onClick={() => goRute('/store/Dormitorio')}>Dormitorio</li>
              </ul>
            </nav>
          </div>

          <div>
            <h3>Sobre Nosotros</h3>

            <nav className='footer-menu'>
              <ul>
                <li onClick={() => showModal('history')}>Nuestra Historia</li>
                <li onClick={() => showModal('mvv')}>Misión, Visión y Valores</li>
                <li onClick={() => showModal('politica')}>Política de Privacidad</li>
                <li onClick={() => showModal('terminos')}>Términos del Servicio</li>
              </ul>
            </nav>
          </div>

          <div>
            <h3>Soporte</h3>

            <nav className='footer-menu'>
              <ul>
                <li onClick={() => showModal('frequents')}>Preguntas Frecuentes</li>
              </ul>
            </nav>
          </div>
        </div>

        <p className='copyright'>Todos los derechos Reservados, Elysium | Site by ExCode ©</p>
      </footer>
    </>
  );
};

export default Footer;
