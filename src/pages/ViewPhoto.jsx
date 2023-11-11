import React from 'react';
import ModalViewPhoto from '../components/ModalViewPhoto';
import { useNavigate, useParams } from 'react-router-dom';

const ViewPhoto = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const onHidden = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate('/');
  };

  return <ModalViewPhoto id={id} show={true} onHide={() => onHidden()} />;
};

export default ViewPhoto;
