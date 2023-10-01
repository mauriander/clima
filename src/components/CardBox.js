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
  width: 160px;
  height: 90px;
  border-radius: 5%;
  margin:32px;
    background:white;
`;
const Barradiv = styled.div`
   width: 160px;
  height: 90px;
  border-radius: 5%;     
   background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%); 
   border-radius:16px;

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
        
        <Card>    <Barradiv><BarChart chartData={userData}/></Barradiv> </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        


      </CardBoxDiv>
        
        
    );
 
}

export default CardBox;