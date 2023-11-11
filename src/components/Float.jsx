import whatsappIcon from '../assets/icons/whatsapp.svg';

const Float = () => {
  const goToMessage = () => {
   window.open('https://wa.me/+593964115286?text=hola%20escribo%20desde%20la%20web:%0Ahttps://webmuebleria.web.app');
  };

  return (
    <div onClick={() => goToMessage()} className='btn-float'>
      <img src={whatsappIcon} alt='Logo WhatsAp' />
    </div>
  );
};

export default Float;
