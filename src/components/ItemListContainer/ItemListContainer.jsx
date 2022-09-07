import { useState,useEffect } from "react";
import ItemCount from "../itemCount/ItemCount";
import ItemList from "../itemList/ItemList";
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
         if(quantity !== 0){
             alert(`agregaste ${quantity} a tu bolsa de compra`)
    }
}

const [data,setData] = useState([])

useEffect(() => {

    customFetch(2000,dataFromBD)
      .then(data => setData(dataFromBD))
      .catch(err => console.log(err));
   
   
   },[])

 
    return (
        <div className=" container mt-3 mb-5 justify-content-center">
        
        {/* <h2>{greeting}</h2> */}
         
          {/* <ItemCount stock = {5} initial = {1} onAdd ={onAdd} />  */}
          <ItemList items = {data} />
        </div>
    
    );

}

export default ItemListContainer