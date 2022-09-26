import { useState,useContext } from "react";
import ButtonCart from "../buttonCart/ButtonCart";
import ItemCount from "../itemCount/ItemCount";
import {CartContext} from "../cartContext/CartContext";

import Swal from 'sweetalert2'






const ItemDetail = (item) => {
  
  const [itemCount,setItemCount] = useState(0);
  const {addItem} = useContext(CartContext)
  
    const onAdd = (quantity) => {
        if(quantity !== 0){
           Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `agregaste ${quantity} a tu bolsa de compra`,
              showConfirmButton: false,
              timer: 1000
            })
            setItemCount(quantity)
            addItem(item,quantity)
   }
}

    return (
    
<div className="card border border-0 mb-3 mt-3">
  <div className="row justify-content-around">
    <div className="col-md-5">
      <img src={item.img} className="img-fluid rounded-start" alt={`imagen de ${item.title}`}/>
    </div>
    <div className="col-md-5 d-flex flex-column text-center">
      <div className="card-body">
        <h2 className="card-title h1 text-uppercase">{item.title}</h2>
        <div className="mt-5">
        <p className="card-text h3 ">${item.price}</p>
        <p className="card-text pt-5 h5">Stock: {item.stock}</p>
        </div>
      </div>
      <div>
{ 
        itemCount !== 0 ? 
        <ButtonCart/>
            :  
      <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd}/>
    }
      </div>                           
       </div>
  </div>
 
  <div className="accordion m-4" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header " id="headingOne">
      <button className="accordion-button text-light bg-dark " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Descripcion
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>{item.description}</p>
      </div>
    </div>
  </div>
  </div>
</div>


    );
  };
  
  export default ItemDetail;