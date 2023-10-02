
import React, { useState } from 'react'
import styled from 'styled-components';
import { UserData } from '../data';



const TotalTemp = styled.div`
  width: 300px;
  height: 25vh;
  border-radius: 5%;
  margin:32px;
  display: flex;

  ${'' /* background-image: linear-gradient(-220deg, #f83600 0%, #f9d423 100%);  */}

`;

const LeftColumn = styled.div`
  flex: 0 0 50%; 
  padding: 16px; 
  box-sizing: border-box;
  text-align:center;

    background-image: linear-gradient(90deg, #f83600 0%, #f9d423 100%); 
font-weight: bold;
`;

const Numero = styled.h1`
  height: 56px;
  font-weight: bold;
  color: rgba(22, 22, 22, 0.92);
 


`;

const RightColumn = styled.div`
  flex: 0 0 50%; 
  padding: 16px; 
    text-align:center;
  box-sizing: border-box;

   background-image: linear-gradient(90deg, #f9d423 0%, #30cad7 100%);
   font-weight: bold;
`;


function CardTemp()  {
 //Maximo
   const maxTemperatura = Math.max(...UserData.map(data => data.temperatura));
const [maximo, setMaximo] = useState(maxTemperatura);
//Minimo
   const minTemperatura = Math.min(...UserData.map(data => data.temperatura));
const [minimo, setMinimo] = useState(minTemperatura);

  
  return (
     <TotalTemp>
    <LeftColumn>
Máxima<br/>
 <Numero> {maximo}º</Numero>
    </LeftColumn>
<RightColumn>
Mínima<br/>
<Numero>{minimo}º</Numero>
</RightColumn>
     </TotalTemp>
    );
 

}

export default CardTemp