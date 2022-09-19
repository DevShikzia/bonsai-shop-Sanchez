import {useState } from "react";

const ItemCount = ({stock, initial,onAdd}) => {

const [quantity, setQuantity] = useState(initial)


const increment = () =>  quantity < stock && setQuantity(quantity +1) ;   
         
const decrement = () =>  quantity > initial+1 && setQuantity(quantity -1);


return (
   <> 
   <div className="card border-0" >
           <div className="d-flex justify-content-evenly lign-items-center mb-4">

                    <button className={`btn bi bi-bag-dash text-danger fs-3`} onClick={decrement}></button>
                        <span className="fs-4">{quantity}</span>
                   <button className={`btn bi bi-bag-plus text-success fs-3 `} onClick={increment}></button >
            </div>
            {
              quantity !== 0 ?
                   <button className={ `btn btn-dark`}  onClick={() => onAdd(quantity)}>Agregar</button>  
                        :
                   <button className={ `btn btn-dark disabled`}>Agregar</button>  
            }
   </div>      
         
 
   </>
    );

}

export default ItemCount