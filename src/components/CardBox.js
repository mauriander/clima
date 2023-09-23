import React, { Component } from 'react'
import  Card  from './Card';
import styled from 'styled-components';

const CardBoxDiv = styled.div`
  
  display: grid;
  grid-template-columns: repeat(3, 2fr); 
   background-:transparent;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
  }

`;

export class CardBox extends Component {
  render() {
    return (
      <CardBoxDiv>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        


      </CardBoxDiv>
        
        
    )
  }
}

export default CardBox