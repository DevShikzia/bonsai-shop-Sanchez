import { useState,useEffect } from "react";
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";
import Item from "../item/Item";




const ItemList = () => {

const [data,setData] = useState([])

useEffect(() => {

    customFetch(2000,dataFromBD)
      .then(data => setData(dataFromBD))
      .catch(err => console.log(err));
   
   
   },[])
    
    return (
  
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3 mb-5">
          {
            
            data.length ?

            data.map(product => (  
                <Item
                key={product.id}
                title={product.title}
                img={product.pintureURL}
                stock={product.stock}
                price={product.price}
                 />

            )
            ) 
            : 
            <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        
          }
          </div>
    
    );
  };
  
  export default ItemList;