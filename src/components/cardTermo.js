
import React, { useState} from 'react'
import styled from 'styled-components';
import { UserData } from '../data';



const Termo = styled.div`
  
width: 35vh;
  height: 35vh;
  border-radius: 50%;
  margin:32px;
  position: relative ;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  color: #444;
  text-align: center;
  background:transparent;
   
`;
const Centro = styled.div`
  position: absolute;

  top: 50%;

  left: 50%;
  color: red;transform: translate(-50%, -50%);
  text-align: center;
  width: 16px;
  background:white
`;

const Marcador = styled.div`
 position: absolute;
  width: 8px;
  height: 118px;
  background: yellow;
  top: 10.5%;
  left: 50%;
  transform-origin: bottom;
`;

const Temperatura = styled.div`
 position: absolute;
  
  text-align:center;

  color:black;

  font-size:bold;
  bottom: 0px;
  left: 130px;

 
  
`;


const Imagen = styled.div`
width:116px;
height: 116px;
  text-align:center;
  left: 32px;
  position: absolute;

 
  
`;

const Ciudad = styled.div`
 position: absolute;
  color:black;
 
  font-weight: bold;
  bottom: 0px;
  left: 16px;

 
  
`;

function CardTermo () {

    const promedioTemperatura = UserData.reduce((total, data) => total + data.temperatura, 0) / UserData.length;
const [promedio, setPromedio] = useState(promedioTemperatura.toFixed(0));

  

    return (
    
      <Termo>
      <Marcador>Flecha</Marcador>
      <Centro>Punto</Centro>

      <Temperatura>{promedio}ºC</Temperatura>
    
      <Ciudad>Cordoba</Ciudad>
    
      </Termo>
   
    )
  

}

export default CardTermo