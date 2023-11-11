import { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

import Loader from '../components/Loader';

import page1 from '../assets/book/1.png';
import page2 from '../assets/book/2.png';
import page3 from '../assets/book/3.png';
import page4 from '../assets/book/4.png';
import page5 from '../assets/book/5.png';
import page6 from '../assets/book/6.png';
import page7 from '../assets/book/7.png';
import page8 from '../assets/book/8.png';
import page9 from '../assets/book/9.png';
import page10 from '../assets/book/10.png';

import arrowLeft from '../assets/icons/chevron_left.svg';
import arrowRight from '../assets/icons/chevron_right.svg';

const book = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10];

const Book = () => {
  const [showLoader, setShowLoader] = useState(true);

  const hiddeLoader = () => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  };

  // Devuelve el ancho de la pantalla en píxeles
  const width = window.innerWidth;

  const bookRef = useRef();

  return (
    <main>
      {showLoader && <Loader />}
      <div className='book-container'>
        <div className='book'>
          <HTMLFlipBook ref={bookRef} width={width >= 600 ? 300 : 250} height={width >= 600 ? 500 : 350} showCover={true}>
            {book.map((page, index) => (
              <img src={page} alt='Página' key={index} onLoad={() => hiddeLoader()} />
            ))}
          </HTMLFlipBook>
        </div>
        <div className='btn-book'>
          <button onClick={() => bookRef.current.pageFlip().flipPrev()}>
            <img src={arrowLeft} alt='Icono pag pev' />{' '}
          </button>
          <button onClick={() => bookRef.current.pageFlip().flipNext()}>
            <img src={arrowRight} alt='Icono pag next' />{' '}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Book;
