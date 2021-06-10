import React, {useState, useEffect} from 'react'
import './App.css';
import faker from "faker";
import 'bootstrap/dist/css/bootstrap.min.css';

 
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
    console.log(basket)
    setBasket([...basket,item])
  }

return(
  <div>
   
    
    <h1>Cats 4 lyf</h1>
    <p>We are the number 1 shop for cats.</p>
    

    {cats.map((item, index) => {
            return  (
                <>
                    <h2 key={index}>name:{item.name} Age:{item.age} Price:{item.price}</h2>
                    <img src={item.url} alt="cat" width="100px" height="100px"></img>
                    <button onClick={() => addToBasket(item)}>add to basket</button>                    
                </>
            )
            })
       }
  </div>
)
}

export default App;