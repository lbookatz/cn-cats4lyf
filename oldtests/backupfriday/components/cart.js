import styled from "styled-components";
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUpBasket from "./modalBasket"

const Cart = ({basket, totalPrice}) => { 
    return(
    <StyledContainer>
         
            <StyledInfo>
                <StyledP>Number of items in basket: {basket.length}</StyledP>
                <StyledP>Total Price: £{totalPrice}</StyledP>
                <PopUpBasket basket={basket}/>   
                                
            </StyledInfo>
         
    </StyledContainer> 
    ) 
};

const StyledContainer = styled.div`
    display: flex;    
    flex-direction: row;
    margin-bottom: 20px;
    padding:10px;
    justify-content: space-around;    
    width: 400px;
    background-color: beige;
    border-radius: 5px;
`;

const StyledInfo = styled.div`
    color: darkpink;  
    margin-left: 10px;
    
`;

const StyledP = styled.p`
    margin-bottom: 5px;
`

const StyledButton = styled.button`
    height: 30px;
    margin-left: 10px;
    vertical-align:middle ;
  background-color: pink;
  padding: 5px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #ff9faf;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;
   
export default Cart;