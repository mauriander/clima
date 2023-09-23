
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import  CardTemp  from './components/CardTemp';
import  CardTermo  from './components/CardTermo';
import  CardP  from './components/CardP';
import  Card  from './components/Card';
import Modo from './components/Modo';



const AppTotal = styled.div`
  display: flex;
  width: 100%;
   height: 100vh;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
`;

const LeftColumn = styled.div`
   flex: 0 0 30%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 
`;

const RightColumn = styled.div`
  flex: 0 0 70%; /* Ocupa el 70% del ancho disponible */
  padding: 16px; /* Añade espaciado si es necesario */
  box-sizing: border-box;
`;

function App() {
  return (
    <AppTotal>
 
        <LeftColumn>
        <CardTermo />
         <CardTemp />
         
       
          
       
      </LeftColumn>
      <RightColumn>
<CardP/>
<Card/>
<Modo/>
  </RightColumn>
    </AppTotal>
  );
}

export default App;
