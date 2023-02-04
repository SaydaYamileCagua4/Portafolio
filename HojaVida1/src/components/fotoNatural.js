import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';

function FotoNatural() {
    
    return (
      <Carousel className= "mt-5">
      <Carousel.Item>
      <Fototogra 
      foto='Cocodrilo'
      titulo='Araña'
      texto='La fotografía de naturaleza es un género fotográfico que consiste
      en representar visualmente con una fotografía de elementos
      naturales'
      />
    
    </Carousel.Item>
    <Carousel.Item>
   
    <Fototogra 
    foto='rosa'
      titulo='Pez Bailarina'
      texto='Paisajes, fauna, flora, elementos inanimados como una roca o una
      montaña.'
      />
    </Carousel.Item>

    <Carousel.Item>
     
    <Fototogra 
    foto='flor1'  
      titulo='Pez Reina'
      texto='La finalidad de la fotografía de naturaleza es capturar la parte
      estética del entorno actualmente es una de las disciplinas más
      practicadas dentro de la fotografía, debido a que engloba muchos
      subtipos.'
      />
    </Carousel.Item>
    
    <Carousel.Item>
    
    <Fototogra 
      foto='FlorMacro'
      titulo='Colibri'
      texto='El proyecto muestra repetidamente una acción humana convirtiéndola en otro ser vivo
      como parte de la naturaleza.
        “El humano se identifica con el animal”'
      />
    </Carousel.Item>
  </Carousel>
      
      );
    }

    export default FotoNatural;

