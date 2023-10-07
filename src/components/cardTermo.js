import React, { useState } from "react";
import styled from "styled-components";
import { UserData } from "../data";
import ReactSpeedometer from "react-d3-speedometer";
import Gauge from "react-canvas-gauge";
// import SpeedoButton from "../speedo-button";
// export const ForceRenderTheComponent = () => <SpeedoButton />;



const Termo2 = styled.div`
  width: 35vh;
  height: 35vh;
`;

const Termo = styled.div`
  width: 100%;
  height: auto;
  padding:16px;
  margin:16px;
  justify-content:center;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  font-size: 24px;

  text-align: center;
  background: transparent;
`;




const Temperatura = styled.div`
  position: absolute;
  text-align: center;
  
`;

const Imagen = styled.div`
  width: 116px;
  height: 116px;
  position: absolute;
`;

const Ciudad = styled.div`
display:flex;
align-items:flex-end;
 font-weight: bold;
  
`;

function CardTermo() {
  const promedioTemperatura =
    UserData.reduce((total, data) => total + data.temperatura, 0) /
    UserData.length;
  const [promedio, setPromedio] = useState(promedioTemperatura.toFixed(0));

  return (
 
    <Termo>
     <Gauge

  mode="gauge"
  size={200}
  enableAnimation={true}
  // animationTimeout={250}
  title="Temp."
  unit={decodeURI('%C2%B0C')}
  minValue={-15}  
  value={promedio}
scaleList={[
  { scale: 5, quantity: 4, startColor: '#2e86c1', endColor: '#7dcea0' }, // Azul a Verde
  { scale: 5, quantity: 4, startColor: '#7dcea0', endColor: '#f7dc6f' }, // Verde a Amarillo
  { scale: 5, quantity: 4, startColor: '#f7dc6f', endColor: '#ff4e50' }  // Amarillo a Rojo
]}
/>
<Ciudad>Cordoba</Ciudad>
 <Temperatura>{promedio}ºC</Temperatura><br></br>
      

    </Termo>
  );
}

export default CardTermo;
