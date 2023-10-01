
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import  CardTemp  from './components/CardTemp';
import  CardTermo  from './components/CardTermo';

// import  CardP  from './components/CardP';
import  CardBox  from './components/CardBox';
import Modo from './components/Modo';
import BarChart from './components/BarChart';
import { UserData } from './data';

import {Bar} from 'react-chartjs-2';


const AppTotal = styled.div`
  display: flex;
  width: 100%;
   height: 100vh;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

  flex-direction: column;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 0 0 50%;

  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 
`;

const RightColumn = styled.div`

  flex: 0 0 50%; 
  padding: 16px; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Barrdiv = styled.div`
 color: white; /* Establece el color del texto en blanco */
  width: 100%; /* Ajusta el ancho para que sea responsive */
  max-width: 480px; /* Establece un ancho máximo opcional */
  margin:32px; 
  font-size: 32px; /* Tamaño de fuente predeterminado */
  background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%); 

   @media (max-width: 400px)    {
    font-size: 14px; /* Cambia el tamaño de fuente para dispositivos móviles */
  }
`;
function App() {
const labels = []; // Reemplaza con tus etiquetas reales
  const data = [];
  const [userData, setUserData] = useState({
    responsive:true,
      labels: UserData.map((data)=> data.hora),
      
      datasets: [
        {
          label: "Temperatura/hora",
          data: UserData.map((data)=> data.temperatura),
      backgroundColor: 'lightblue',
      borderRadius:16,
      color: 'white',
     
          
        }
      ]
    
  });



  return (
    <AppTotal>
 
        <LeftColumn>
        <CardTermo />
         <CardTemp />

          
       
      </LeftColumn>
      <RightColumn>

     <Barrdiv>
    <BarChart chartData={userData}/>
   </Barrdiv> 

<CardBox/>
<Modo/>
  </RightColumn>
    </AppTotal>
  );
}

export default App;
