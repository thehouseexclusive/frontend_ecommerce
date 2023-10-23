import React, {useState} from 'react';


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

  const anterior = () => {
    if (posicion <= 0){
      setPosicion(0);
    }else{
      setPosicion(posicion-1);
    }
  }

  const siguiente = () => {
    if (posicion >= imagenes.length-1){
      setPosicion(imagenes.length-1);
    }else{
      setPosicion(posicion+1);
    }
  }
  return (
    <div>
      <img src={imagenes[posicion]} alt="Imagen del carrusel" />
      <button onClick={anterior}> anterior</button>
      <button onClick={siguiente}> siguiente</button>
    </div>
  );
}

export default Carrusel;