import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";
import ItemDetail from "../itemDetail/ItemDetail";
import Spinner from "../spinner/Spinner";

const ItemDetailContainer = () => {


const [data,setData] = useState({})

 const {id} = useParams()



useEffect(() => {

    customFetch(2000,dataFromBD.find(product => product.id === +id))
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
                       id={data.id}
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