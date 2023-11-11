const Contacts = () => {
  return (
    <form>
      <h2>Contáctanos</h2>
      <input placeholder='Nombre' type='text' />
      <input placeholder='Correo' type='text' />
      <input placeholder='Teléfono' type='text' />
      <textarea cols='30' rows='10' placeholder='Mensaje'></textarea>
      <button>Contáctar</button>
    </form>
  );
};

export default Contacts;
