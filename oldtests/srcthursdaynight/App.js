import React, {useState, useEffect} from 'react'
import './App.css';
import faker from "faker";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from "./components/cat"
import styled from "styled-components";
import img from './images/backgroundCats.webp'

 
function App() {

  const [cats, setCats] = useState ([]); 
  const [basket, setBasket] = useState ([]); 

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=4")
      let data = await response.json(); 
      for (let i = 0; i < data.length; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(12)
        cat["price"] = faker.commerce.price(50,100)
      }
      setCats(data)
  }

  const addToBasket = (item) => {    
    setBasket([...basket,item])
    console.log(basket)
  }

return(
  <StyledWrapper>
    <h1>Cats 4 lyf</h1>
    <p>We are the number 1 shop for cats.</p>
    
    
    {cats.map((item, index) => {
            return  (
                <Cat item={item} index={index} addToBasket={addToBasket}/>                    
                )
            })
       }
  </StyledWrapper>
       
)
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url("images/backgroundCats.webp");
  background-image: url(${img});
  background-size: 200px 200px;
  background-repeat: repeat;
  
  // background-color: aqua;
`;


export default App;