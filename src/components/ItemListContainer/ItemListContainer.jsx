import { useState,useEffect } from "react";
import ItemList from "../itemList/ItemList";
import customFetch from "../../utils/customFetch";
import dataFromBD from "../../utils/data";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {


const [data,setData] = useState([]);

const {id} = useParams();


 


useEffect(() => {
    if (id) {
    
    customFetch(2000,dataFromBD.filter(product => product.category === +id))
      .then(result => setData(result))
      .catch(err => console.log(err))    
    }else{
        
        customFetch(2000,dataFromBD)
          .then(result => setData(result))
          .catch(err => console.log(err))
    }
   
   
   },[id])




 
    return (
                 
        data.length ?
           
        <div className=" container mt-3 mb-5 justify-content-center">
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3 mb-5">
        
          <ItemList items = {data} />
          </div>
        </div>
        :
        <Spinner/>
    
    );

}

export default ItemListContainer