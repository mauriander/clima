
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import  CardTemp  from './components/CardTemp';
import  CardTermo  from './components/CardTermo';
import imagenClima from './Clouds.png'

// import  CardP  from './components/CardP';
import  CardBox  from './components/CardBox';
import Modo from './components/Modo';
import BarChart from './components/BarChart';
import { UserData } from './data';

import {Bar} from 'react-chartjs-2';
const Imagen = styled.div`
width:15vh;
height: 15vh;
text-align:center;
   

 
  
`;

const AppTotal = styled.div`
  display: flex;
  width: 100%;

    background-color: ${(props) => (props.isDarkMode ? '#154360' : '#FCF3CF')};
  color: ${(props) => (props.isDarkMode ? '#FCF3CF' : '#154360')};
  
  ${'' /* background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%); */}

  flex-direction: row;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
 
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex: 1; /* Ocupa el 100% del ancho en pantallas pequeñas */
    max-width: 100%;
  }
 
`;

const RightColumn = styled.div`

  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex: 1; /* Ocupa el 100% del ancho en pantallas pequeñas */
    max-width: 100%;
  }
`;

const Barrdiv = styled.div`
 
  width: 100%;
  max-width: 480px;
 
  font-size: 32px;
  background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
   @media (max-width: 40px)    {
    font-size: 14px; /* Cambia el tamaño de fuente para dispositivos móviles */
     margin: 2px;
  }
`;
const ToggleButton = styled.button`
    background-color: ${(props) => (props.isDarkMode ? '#154360' : '#FCF3CF')};
  color: ${(props) => (props.isDarkMode ? '#FCF3CF' : '#154360')};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width:116px;
`;


function App() {

   const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    const imagen = 'Snow'; // Snow.png haze.png cloud.png
  const direccion = './img/' + imagen + '.png';
  const [imgclima, setImgClima] = useState(direccion);
const labels = []; // Reemplaza con tus etiquetas reales
  const data = [];
  const [userData, setUserData] = useState({
   
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
       
    <AppTotal isDarkMode={isDarkMode}>
       
    
        <LeftColumn  >
          <ToggleButton onClick={toggleDarkMode} isDarkMode={isDarkMode}>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</ToggleButton>
        <CardTermo />

          <Imagen>
        <img src={imagenClima} alt="Clima" style={{width: '15vh' }} />
      </Imagen>
    
         <CardTemp />        
       
      </LeftColumn>
   
      <RightColumn>
    

     <Barrdiv>
     
    <BarChart chartData={userData}/>
   </Barrdiv> 

<CardBox isDarkMode={isDarkMode}/>

   
    
  </RightColumn>
  
    </AppTotal>
  );
}

export default App;
