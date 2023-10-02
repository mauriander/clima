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
  align-items:center;
  background-: transparent;
 

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 3fr);
  }
`;
const Card = styled.div`
  width: 32vh;
  height: auto;
  border-radius: 5%;
  margin: 32px;
  background-image: linear-gradient(to top, #13547a 2%, #80d0c7 60%);
  ${
    "" /* background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%); */
  }
`;
const Barradiv = styled.div`
  width: 160px;
  height: 90px;
  border-radius: 5%;
  ${
    "" /* background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);  */
  }
  border-radius:16px;
`;
const Numero = styled.h1`
  display: flex;
  font-weight: bold;
  color: purple;
`;
const Unidad = styled.h6`
  display: flex;
  color: purple;
`;
const Columna = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Parrafo = styled.p`
  font-size: 16px;
  color: white;
`;
const Titulo = styled.h3`
  color: rgba(210, 21, 210, 0.75);
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

  const [usersData, setUsersData] = useState('6:25');

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
          <Numero>{usersData} </Numero><Unidad>AM</Unidad><Parrafo>Imagen o Icono</Parrafo>
        </Columna>
        <Columna>
          <Numero>{usersData} </Numero><Unidad>PM</Unidad><Parrafo>Imagen</Parrafo>
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
            strokeWidth={16}
          />
        </Columna>
      </Card>
      <Card>
        <Titulo>Viento</Titulo>
        <Columna>
          <Numero>{userwvData} </Numero>
          <Unidad>km/h</Unidad>
        </Columna>
        <Parrafo> Se esperan altas probabilidades de tornados</Parrafo>
      </Card>
      <Card>
        <Titulo>Calidad de aire</Titulo>
        <Columna>
          <Numero>{useraqData[0]} </Numero>
          <Progress.Line
            percent={useraqData[0] / 3}
            strokeColor={" #fddb92"}
            vertical={true}
            showInfo={false}
            strokeWidth={16}
          />
        </Columna>
        <Parrafo> {useraqData[1]}</Parrafo>
      </Card>

      <Card></Card>
    </CardBoxDiv>
  );
}

export default CardBox;
