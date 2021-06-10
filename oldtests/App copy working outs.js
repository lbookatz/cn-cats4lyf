import React, {useState, useEffect} from 'react'
import './App.css';
import faker, { datatype } from "faker";


function App() {

  const [cats, setCats] = useState ([]); 

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      let data = await response.json(); 
      // console.log(data)

      for (let i = 0; i < data.length; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(12)
        console.log(cat)
        }
      setCats(data)

      // for (let i = 0; i < data.length; i++) {
      //   const cat = data[i];
      //   cat["name"] = faker.name.firstName()        
      //   cat["age"] = faker.datatype.number(12)
      //   console.log(cat)
      //   }
      // setCats(data)
      // console.log(cats)
    

      // for (let i = 0; i < data.length; i++) {
      //   const cat = {name:faker.name.firstName(), age:datatype.number(12), image:data[i].url}
      //   console.log(cat)
      //   setCats([...cats,cat])
      //   }
      
      // // {data.map((item) => {setCats([...cats,{name:faker.name.firstName(), age:datatype.number(12), image:item.url}])})}
      
      // console.log(cats)
    
  }

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"))

return(
  <div>
    <>
      <h1>learn faker</h1>  
      <button onClick={getCats}>get cat</button>
    </>

  {cats.map((item, index) => {
            return  (
                <>
                    <h1 key={index}>{item.name} {item.age} {index}</h1>
                    <img src={item.url} alt="cat" width="200px" height="200px"></img>
                </>
            )
            })
       }
  </div>
)
}

export default App;
