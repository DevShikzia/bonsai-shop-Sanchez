import { useState } from "react";

const ItemCount = ({stock, initial,onAdd}) => {

const [quantity, setQuantity] = useState(initial)

const increment = () =>  quantity < stock ? setQuantity(quantity +1) : null;   
         
const decrement = () =>  quantity > initial ? setQuantity(quantity -1) : null;

const inStock = stock !== 0 ? true : false;


return (
    <>       

 <div className="card" style={{width: "18rem"}}>
        <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <h5 className="card-title">Girasol</h5>
                 <div className="d-flex justify-content-around align-items-center w-100 ">
                   <button className={`btn btn-success ${inStock ? "" : "disabled" }`} onClick={increment}><i className="bi bi-bag-plus"></i></button>
                        <p className="fs-4">{quantity}</p>
                    <button className={`btn btn-danger ${inStock ? "" : "disabled" }`} onClick={decrement}><i className="bi bi-bag-dash"></i></button>
                </div>
            <button className={ `btn btn-primary ${inStock ? "" : "disabled" }`}  onClick={() => onAdd(quantity)}>Agregar</button>
        </div>
    </div>
       
       
       </>

    );

}

export default ItemCount