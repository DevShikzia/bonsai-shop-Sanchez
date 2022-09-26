import { useContext } from "react";
import {CartContext} from "../cartContext/CartContext";
import { Link } from 'react-router-dom'

const Cart = () => {


const {cartList,clear,removeItem,itemPriceTotal,totalPrice} = useContext(CartContext)

  return (
    <>
     <div className="container mt-3 mb-5 justify-content-center"> 
        <h2>tu bolsa</h2>
     <ol className="list-group list-group-numbered">
        

        {
          cartList.length  ?

          cartList.map(item =>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  {item.quantity} producto(s) / $ {item.price} precio x unidad
                  <div>

                  <button onClick={() =>removeItem(item.id)}>borrar item</button>
                  </div>
                </div>
                <span className="badge bg-primary rounded-pill">${itemPriceTotal(item.id)}</span>
              </li>
        
               )
              :
              <div>
              <p>tu bolsa esta vacia</p>
             <Link to={'/'}><button>Ver Catalogo</button></Link>
              </div>

            }
               {
            cartList.length > 0 && 
            
            <div className=" d-flex justify-content-between align-items-start">
                <button onClick={clear}>Delete all</button>
                <span className="badge bg-primary rounded-pill">TOTAL: ${totalPrice()}</span>
          </div>
          }
            </ol>
            
         </div> 
    
    </>
  );
};

export default Cart;
