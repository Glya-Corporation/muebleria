import product1 from '../assets/img/producto1.jpg';
import product2 from '../assets/img/producto2.jpg';
import product3 from '../assets/img/producto3.jpg';
import product4 from '../assets/img/producto4.jpg';
import product5 from '../assets/img/producto5.jpg';
import product6 from '../assets/img/producto6.jpg';
import product7 from '../assets/img/producto7.jpg';
import product8 from '../assets/img/producto8.jpg';
import product9 from '../assets/img/producto9.jpg';
import product10 from '../assets/img/producto10.png';
import product11 from '../assets/img/producto11.jpg';
import product12 from '../assets/img/producto12.png';
import product13 from '../assets/img/producto13.jpg';
import product14 from '../assets/img/producto14.png';
import product15 from '../assets/img/producto15.jpg';
import product16 from '../assets/img/producto16.jpg';
import product17 from '../assets/img/producto17.jpg';
import product18 from '../assets/img/producto18.jpg';
import product19 from '../assets/img/producto19.jpg';
import product20 from '../assets/img/producto20.jpg';
import product21 from '../assets/img/categoria3.jpg';
import product22 from '../assets/img/producto21.jpg';
import product23 from '../assets/img/producto22.jpg';

const productos = [
  {
    id: 1,
    imgSrc: product1,
    title: 'Cama dos Plazas',
    status: 'destacado',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 150 cm de ancho x 190 cm de largo</li>
        <li>Cama familiar fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 2,
    imgSrc: product2,
    title: 'Cama una Plaza',
    status: 'secondary',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 90 cm de ancho x 190 cm de largo</li>
        <li>Cama individual fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 3,
    imgSrc: product3,
    title: 'Cama una Plaza',
    status: 'secondary',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 90 cm de ancho x 190 cm de largo</li>
        <li>Cama individual fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 4,
    imgSrc: product4,
    title: 'Cama Plaza y media',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 105 cm de ancho x 190 cm de largo</li>
        <li>Cama para una persona o pareja, fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 5,
    imgSrc: product5,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 6,
    imgSrc: product6,
    title: 'Juego de sala',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Mueble para tres personas</li>
        <li>Mueble para dos personas</li>
        <li>Dos muebles individuales</li>
        <li>Mueble estilo tambor</li>
      </ul>
    ),
    category: 'Sala'
  },
  {
    id: 7,
    imgSrc: product7,
    title: 'Cama una Plaza',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 90 cm de ancho x 190 cm de largo</li>
        <li>Cama individual fabricada con madera Fernand Sánchez, una madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 8,
    imgSrc: product8,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 9,
    imgSrc: product9,
    title: 'Cama Plaza y media',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 105 cm de ancho x 190 cm de largo</li>
        <li>Cama para una persona o pareja, fabricada con madera Fernand Sánchez, una madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 10,
    imgSrc: product10,
    title: 'Cama Tres Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 150 cm de ancho x 190 cm de largo</li>
        <li>Cama familiar fabricada con madera Fernand Sánchez, una madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 11,
    imgSrc: product11,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 12,
    imgSrc: product12,
    title: 'Cama Tres Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 150 cm de ancho x 190 cm de largo</li>
        <li>Cama familiar fabricada con madera Fernand Sánchez, una madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 13,
    imgSrc: product13,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 14,
    imgSrc: product14,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 15,
    imgSrc: product15,
    title: 'Cama dos Plazas',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Medidas: 135 cm de ancho x 190 cm de largo</li>
        <li>Cama matrimonial fabricada con madera Fernand Sánchez, madera de alta calidad y resistencia.</li>
      </ul>
    ),
    category: 'Dormitorio'
  },
  {
    id: 16,
    imgSrc: product16,
    title: 'Mueble Minimal',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegante mueble para dos o tres personas</li>
        <li>Ideal para tu oficina</li>
      </ul>
    ),
    category: 'Sala'
  },
  {
    id: 17,
    imgSrc: product17,
    title: 'Mueble Minimal',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegante mueble para dos personas</li>
        <li>Ideal para tu oficina</li>
      </ul>
    ),
    category: 'Sala'
  },
  {
    id: 18,
    imgSrc: product18,
    title: 'Future Furniture',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de mueble minimalista</li>
        <li>Ideal para tu oficina</li>
      </ul>
    ),
    category: 'Sala'
  },
  {
    id: 19,
    imgSrc: product19,
    title: 'Comedor',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de comedor</li>
        <li>Ideal para tu hogar</li>
      </ul>
    ),
    category: 'Comedor'
  },
  {
    id: 20,
    imgSrc: product20,
    title: 'Juego de Comedor',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de comedor</li>
        <li>Ideal para tu hogar</li>
      </ul>
    ),
    category: 'Comedor'
  },
  {
    id: 21,
    imgSrc: product21,
    title: 'Juego de Comedor',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de comedor</li>
        <li>Ideal para tu hogar</li>
      </ul>
    ),
    category: 'Comedor'
  },
  {
    id: 22,
    imgSrc: product22,
    title: 'Juego de Comedor',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de comedor</li>
        <li>Ideal para tu hogar</li>
      </ul>
    ),
    category: 'Sala'
  },
  {
    id: 23,
    imgSrc: product23,
    title: 'Juego de Comedor',
    status: 'productos',
    description: () => (
      <ul className='description-product'>
        <li>Elegnte juego de comedor</li>
        <li>Ideal para tu hogar</li>
      </ul>
    ),
    category: 'Sala'
  }
];

export default productos;
