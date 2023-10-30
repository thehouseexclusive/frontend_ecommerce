import React, {useState, useEffect} from 'react';
import '../../styles/carousel_home_slider_1.css';


const imagenes = [ 
  "https://res.cloudinary.com/unidigital/image/upload/v1696605197/software%20completo/promo_isfjtt.png",
  "https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_612942-MLA71945575734_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_885299-MLA71946536612_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
  "https://res.cloudinary.com/unidigital/image/upload/v1696605197/software%20completo/promo_isfjtt.png",
  "https://http2.mlstatic.com/D_NQ_827915-MLA72037073590_102023-OO.webp",
  "https://http2.mlstatic.com/D_NQ_741936-MLA72003433921_092023-OO.webp",
];

function Carrusel() {
  const [posicion, setPosicion] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval); 
  }, [currentImageIndex]);

  return (
    <div className="carousel" style={{ backgroundImage: `url(${imagenes[currentImageIndex]})` }}>
      <button onClick={goToPreviousSlide}  className="button_carousel ml-2 bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-110 hover:brightness-90">
        <svg className='icon-carousel' xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </button>
      <button onClick={goToNextSlide} className="button_carousel mr-2 bottom-5 right-5 w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-110 hover:brightness-90">
      <svg className='icon-carousel' xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
      </button>
    </div>
    
  );
}

export default Carrusel;