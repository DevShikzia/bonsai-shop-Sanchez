import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {


const [data,setData] = useState({})

 const {id} = useParams()



useEffect(() => {

    firestoreFetchOne(id)
      .then(result => setData(result))
      .catch(err => console.log(err));
   
   
   },[id])

 
    return (
      <>
      { 
      data.id ? 
        <div className=" container mt-3 mb-5 justify-content-center">
        
           
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