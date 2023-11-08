import React, {useState, useEffect} from 'react';
import '../../styles/carousel_home_slider_1.css';


const imagenes = [ 
  "https://res.cloudinary.com/dqryrvrzh/image/upload/v1698641124/The%20House%20Exclusive/Imagenes%20Carrusel/Carrusel_The_House_Exclusive_5_tqtujg.webp",
  "https://res.cloudinary.com/dqryrvrzh/image/upload/v1698641204/The%20House%20Exclusive/Imagenes%20Carrusel/Carrusel_The_House_Exclusive_6_ykdfrf.webp",
  "https://res.cloudinary.com/dqryrvrzh/image/upload/v1698641251/The%20House%20Exclusive/Imagenes%20Carrusel/Carrusel_The_House_Exclusive_7_lugnen.webp",
  "https://res.cloudinary.com/dqryrvrzh/image/upload/v1698641393/The%20House%20Exclusive/Imagenes%20Carrusel/Carrusel_The_House_Exclusive_8_xmovyk.webp",
  "https://res.cloudinary.com/dqryrvrzh/image/upload/v1698790707/The%20House%20Exclusive/Imagenes%20Carrusel/Carrusel_The_House_Exclusive_9_viu6zw.webp",
  
];

function Carrusel() {

  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * imagenes.length));

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