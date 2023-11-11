const generateUrl = cart => {
  const baseUrl = 'https://wa.me/+593964115286?text=Pedí%20desde%20la%20web%0A';
  const cartItems = cart.map(product => {
    const imageSrc = `https://webmuebleria.web.app/%23/view/photo/${product.id}`;
    return `${product.quantity}%20%20${product.title.split(' ').join('%20')}%0A${imageSrc}%0A%0A`;
  });
  const url = `${baseUrl}${cartItems.join('')}`;
  return url;
};

export default generateUrl;
