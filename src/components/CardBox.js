import React, { useState } from "react";
// import  Card  from './Card';
import styled from "styled-components";
import { UserData } from "../data";
import BarChart from "./BarChart";
import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CardBoxDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  align-items: center;
  background: transparent;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 3fr);
    

  }
`;
const Card = styled.div`
  width: 20vh;
 height:25vh;
  border-radius: 5%;
 
  z-index: 1;
  top: 1em;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(160px);
  @media (max-width: 480px) {
    
 margin: 6px;
  }

`;
const Barradiv = styled.div`
  place-items: center;
  width: 160px;
  height: 90px;
  border-radius: 5%; 
  border-radius:16px;
`;
const Numero = styled.h3`
  font-weight: bold;
  color: purple;
  font-size: 16px;
`;
const Unidad = styled.h6`
  text-align: center;
   font-size: 10px;
  color: light-purple;
`;
const Columna = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Parrafo = styled.p`
  font-size: 10px;
`;
const Titulo = styled.h3`
  
  font-size: 16px;
  text-align:center;
`;
function CardBox() {
  //h humedad
  const [userhData, setUserhData] = useState(12);
  //wv wind velocity
  const [userwvData, setUserwvData] = useState(11.12);
  //aq air quality
  const [useraqData, setUseraqData] = useState([105, "Unhealtly"]);

  //calcular porcentaje para hacer la grafica suponiendo que 300 es lo peor entonces lo divido directamente ene la tabla por osea valor *100/300 seria  1/3

  //v visibility
  const [uservData, setUservData] = useState(6.1);
  //uv indice uv
  const [useruvData, setUseruvData] = useState(6);

  const [usersData, setUsersData] = useState("6:25");

  //VISIBILITY EN KM;
  //VIENTO KM/H
  //AIRQUALITY 0-120
  //HUMEDAD DE 0 A 100
  //INDICE UV DE 0 A 15

  return (
    <CardBoxDiv>
      <Card>
        <Titulo>Indice UV</Titulo>
        <Columna>
          <Numero>{useruvData} </Numero>
        </Columna>
        <Progress.Line
          percent={(useruvData * 100) / 15}
          strokeColor={"#f9d423"}
          vertical={false}
          showInfo={false}
          strokeWidth={16}
        
          
        />
      </Card>
      <Card>
        <Titulo>Puesta del sol</Titulo>
        <Columna>
          <Numero>{usersData} </Numero>
          <Unidad>AM</Unidad>
          <Parrafo>Imagen</Parrafo>
        </Columna>
        <Columna>
          <Numero>{usersData} </Numero>
          <Unidad>PM</Unidad>
          <Parrafo>Imagen</Parrafo>
        </Columna>
      </Card>

      <Card>
        <Titulo>VIisibilidad</Titulo>
        <Columna>
          <Numero>{uservData} </Numero>
          <Unidad>km</Unidad>
        </Columna>
      </Card>
      <Card>
        <Titulo>Humedad</Titulo>
        <Columna>
          <Numero>{userhData} </Numero>
          <Unidad>%</Unidad>
          <Progress.Line
            percent={userhData}
            strokeColor={" #fddb92"}
            vertical={true}
            showInfo={false}
            strokeWidth={20}
             style={{padding:"0px", maxHeight: "18vh" }} 
          />
        </Columna>
      </Card>
      <Card>
        <Titulo>Viento</Titulo>
        <Columna>
          <Numero>{userwvData} </Numero>
          <Unidad>km/h</Unidad>
        </Columna>
        <Parrafo> Se esperan vientos fuertes</Parrafo>
      </Card>
      <Card>
        <Titulo>Calidad de aire</Titulo>
        <Columna>
          <Numero>{useraqData[0]} </Numero>
          <Progress.Line
            percent={(useraqData[0]) / 3}
            strokeColor={" #fddb92"}
            vertical={true}
            showInfo={false}
            strokeWidth={16}
             style={{ padding:"0px", maxHeight: "15vh" }} 
          />
        </Columna>
        <Parrafo> {useraqData[1]}</Parrafo>
      </Card>
    </CardBoxDiv>
  );
}

export default CardBox;
