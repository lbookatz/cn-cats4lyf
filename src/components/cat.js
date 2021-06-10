const Cat = ({item,index,addToBasket}) => { 
    return(
    <div>
                    <h2 key={index}>name:{item.name} Age:{item.age} Price:{item.price}</h2>
                    <img src={item.url} alt="cat" width="100px" height="100px"></img>
                    <button onClick={() => addToBasket(item)}>add to basket</button>   
    </div> 
    ) 
}

export default Cat;