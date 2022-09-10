import { useState,useEffect } from "react";
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";
import ItemDetail from "../itemDetail/ItemDetail";
import Spinner from "../spinner/Spinner";

const ItemDetailContainer = ({greeting}) => {


const [data,setData] = useState({})

useEffect(() => {

    customFetch(2000,dataFromBD[1])
      .then(result => setData(result))
      .catch(err => console.log(err));
   
   
   },[])

 
    return (
      <>
      { 
      data.id ? 
        <div className=" container mt-3 mb-5 justify-content-center">
        
         
          {/* <ItemCount stock = {5} initial = {1} onAdd ={onAdd} />  */}
           
           <ItemDetail key={data.id}
                       title={data.title}
                       stock={data.stock}
                       description={data.description}
                       price={data.price}
                       img={data.pintureURL}
                       />

        </div>
        :
        <Spinner/>
      }
        </>
    );

}

export default ItemDetailContainer