import { useState } from "react";

const ItemCount = ({stock, initial,onAdd}) => {

const [quantity, setQuantity] = useState(initial)

const increment = () =>  quantity < stock ? setQuantity(quantity +1) : null;   
         
const decrement = () =>  quantity > initial ? setQuantity(quantity -1) : null;


return (
   <> 
    {
     stock > 0 ? 

   <div className="card border-0" >
           <div className="d-flex justify-content-evenly lign-items-center mb-4">

                    <button className={`btn bi bi-bag-dash text-danger fs-3`} onClick={decrement}></button>
                        <span className="fs-4">{quantity}</span>
                   <button className={`btn bi bi-bag-plus text-success fs-3 `} onClick={increment}></button >
            </div>
            
      <button className={ `btn btn-dark`}  onClick={() => onAdd(quantity)}>Agregar</button>  
   </div>      
             : 
        
             null
   
    }

   </>
    );

}

export default ItemCount