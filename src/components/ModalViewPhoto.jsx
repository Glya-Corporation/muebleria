import { Modal } from 'react-bootstrap';
import products from '../data/products';

const ModalViewPhoto = ({ id, ...props }) => {
  const product = products.find(item => item.id === Number(id));

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <img src={product.imgSrc} alt='Foto' style={{ width: '100%', height: '50vh', objectFit: 'cover', borderRadius: '.5rem' }} />
        <p>{product.description()}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ModalViewPhoto;
