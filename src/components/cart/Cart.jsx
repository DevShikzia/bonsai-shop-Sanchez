import { useContext } from "react";
import {CartContext} from "../cartContext/CartContext";

const Cart = () => {


const {cartList,clear,removeItem} = useContext(CartContext)

  return (
    <>
     <div className="container mt-3 mb-5 justify-content-center"> 
        <h2>tu bolsa</h2>
     <ol className="list-group list-group-numbered">
        

        {
          cartList.map(item =>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  cantidad: {item.quantity}
                  <div>

                  <button onClick={() =>removeItem(item.id)}>borrar item</button>
                  </div>
                </div>
                <span className="badge bg-primary rounded-pill">${item.price}</span>
              </li> )

            }
               {
            cartList.length ? <button onClick={clear}>Delete all</button> : <p>tu bolsa esta vacia</p>
          }
            </ol>
         </div> 
    
    </>
  );
};

export default Cart;
