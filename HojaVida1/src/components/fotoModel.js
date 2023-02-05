import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';
import Fotogra from './Fotogra';

function FotoModel() {

  return (
    <Carousel className= "mt-5">
      <Carousel.Item>
        <Fotogra
        foto='Laura'
        titulo='El Modelaje'
        texto='La definición amplia de modelaje se toma como una disciplina
        teórica y práctica que busca el perfeccionamiento de las
        relaciones humanas y sociales'
        />
      </Carousel.Item>

  <Carousel.Item>
    <Fototogra 
    foto='Hombre'
    titulo=''
    texto='A través del desarrollo personal de las cualidades y aptitudes
    físicas y espirituales del hombre, lo cual implica su mejoramiento
    y perfección constantes.'
    />
    </Carousel.Item>

    <Carousel.Item>
      <Fotogra 
      foto='Erika'
      titulo=''
      texto='Las personas que logren este objetivo en
      cualquier plazo, se convierten así en las sociedades en modelos,
      es decir en prototipo de un símbolo o signo de superación,éxito y
      desarrollo.'
      />
    </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='Erika1' 
      titulo=''texto='' />
    </Carousel.Item>
  </Carousel>
      );
  }

export default FotoModel;
     
    <Fototogra 
    foto='Hombre'  
      titulo=''
      texto='Utilice como base al fotógrafo Brad Wilson por sus bellas imágenes a animales en estudio y
      al ver el resultado tome diferentes imágenes y cree texturas para montarlas sobre ellas, de
      tal manera que el resultado fuera optimo. Por ello, es indispensable los bocetos, estudiar
      la estructura previa del animal, y la formación del cuerpo, la dirección en el modelo y las
      debidas posturas que éste opta, para lograr la imagen deseada tomando foto a foto cada
      movimiento.'
      />
    </Carousel.Item>
    
    <Carousel.Item>
    
    <Fototogra 
      foto='Erika1'
      titulo=''
      texto='El proyecto muestra repetidamente una acción humana convirtiéndola en otro ser vivo
      como parte de la naturaleza.
        “El humano se identifica con el animal”'
      />
    </Carousel.Item>
  </Carousel>
      
      );
    }

    export default FotoModel;

