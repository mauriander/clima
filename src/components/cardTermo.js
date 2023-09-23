import React, { Component } from 'react'
import styled from 'styled-components';
const Termo = styled.div`
  
width: 300px;
  height: 300px;
  border-radius: 50%;
  margin:32px;
  position: relative ;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  color: #444;
  text-align: center;
  background:transparent;
`;
const Centro = styled.div`
  position: absolute;
 top: 50%;
  left: 50%;
  color: red;transform: translate(-50%, -50%);
  text-align: center;
  width: 16px;
  background:white
`;

const Marcador = styled.div`
 position: absolute;
  width: 8px;
  height: 118px;
  background: yellow;
  top: 10.5%;
  left: 50%;
  transform-origin: bottom;
`;

const Temperatura = styled.div`
 position: absolute;
  
  text-align:center;
  color:white;
  font-size:bold;
  bottom: 0px;
  left: 130px;

 
  
`;
export class CardTermo extends Component {
  render() {
    return (
    
      <Termo>
      <Marcador>Flecha</Marcador>
      <Centro>Punto</Centro>
      <Temperatura>20ºC</Temperatura>
      </Termo>
    )
  }
}

export default CardTermo