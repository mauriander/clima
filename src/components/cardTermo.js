import React, { useState } from "react";
import styled from "styled-components";
import { UserData } from "../data";
import ReactSpeedometer from "react-d3-speedometer";
// import SpeedoButton from "../speedo-button";
// export const ForceRenderTheComponent = () => <SpeedoButton />;



const Termo2 = styled.div`
  width: 35vh;
  height: 35vh;
`;

const Termo = styled.div`
  width: 100%;
  height: 45vh;
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
  <Temperatura>{promedio}ºC</Temperatura>
      <ReactSpeedometer
 maxValue={50}
 value={promedio}
 valueFormat={"d"}
 customSegmentStops={[
     0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
 ]}
 segmentColors={["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]}
/>

      <Ciudad>Cordoba</Ciudad>

    </Termo>
  );
}

export default CardTermo;
