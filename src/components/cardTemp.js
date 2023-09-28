import React, { Component } from 'react'
import styled from 'styled-components';

const TotalTemp = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 5%;
  margin:32px;
  display: flex;
   background-image: linear-gradient(-220deg, #f83600 0%, #f9d423 100%); 
`;

const LeftColumn = styled.div`
  flex: 0 0 50%; 
  padding: 16px; 
  box-sizing: border-box;
  text-align:center;

`;

const RightColumn = styled.div`
  flex: 0 0 50%; 
  padding: 16px; 
    text-align:center;
  box-sizing: border-box;
`;
export class CardTemp extends Component {
  render() {
    return (
     <TotalTemp>
    <LeftColumn>
Maxima
    </LeftColumn>
<RightColumn>
Minima
</RightColumn>
     </TotalTemp>
    )
  }
}

export default CardTemp