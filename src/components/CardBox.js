
import React, { useState } from 'react';
// import  Card  from './Card';
import styled from 'styled-components';
import { UserData } from '../data';
import BarChart from './BarChart';

const CardBoxDiv = styled.div`  
  display: grid;
  grid-template-columns: repeat(3, 2fr); 
   background-:transparent;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));   }


  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
  }

`;
const Card = styled.div`
  width: 35vh;
  height: 35vh;
  border-radius: 5%;
  margin:32px;
   background-image: linear-gradient(to top, #13547a 0%, #80d0c7 100%);
   ${'' /* background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%); */}
`;
const Barradiv = styled.div`
   width: 160px;
  height: 90px;
  border-radius: 5%;     
   ${'' /* background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);  */}
   border-radius:16px;

`;
const Numero = styled.h1`
  font-weight: bold;
  color: purple;
 


`;

const Titulo = styled.h3`
 
  color: rgba(22, 210, 210, 0.75);
 


`;
function CardBox() {

 
  const [userhData, setUserhData] = useState({  
        
      datasets: [
        {         
       date:'60',
     backgroundColor: 'rgba(53, 162, 235, 0.5)',         
        }
      ]
    
  });

    

   const [userData, setUserData] = useState({
      responsive: true,
          
      datasets: [
        {
          label: "Humedad",
          datah: '20',
      backgroundColor: 'lightblue',
      borderRadius:16,
        }
      ]
  });

  
  
    return (
      <CardBoxDiv>
       
        <Card>    <Barradiv><BarChart chartData={userhData}/></Barradiv> </Card>
        
        <Card>    <BarChart chartData={userData}/> </Card>

        <Card><Titulo>VIisibilidad</Titulo><Numero>6</Numero></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        


      </CardBoxDiv>

    );
 
}

export default CardBox;

