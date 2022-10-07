import { useContext } from "react";
import {CartContext} from "./CartContext";
import { Link } from 'react-router-dom'
import { serverTimestamp, collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'
import Swal from "sweetalert2";

const Cart = () => {


const {cartList,clear,removeItem,itemPriceTotal,totalPrice} = useContext(CartContext)

const createOrder = async() => {

  let itemsForDB = cartList.map(item => ({
    id: item.id,
    title: item.title,
    price: item.price,
    quantity: item.quantity,
 }))

  let order = {
    buyer : {
      name: 'Killua Zoldyck',
      email: 'hisokaWTF@gmail.com',
      phone: '123456789'
    },
    date: serverTimestamp(),
    items: itemsForDB,
    total: totalPrice(),
  }
  // Add a new document with a generated id
  const newOrder = doc(collection(db, "orders"));
  
  // later...
  await setDoc(newOrder, order)
  
  Swal.fire(`Compra existosa, su número de orden es: ${newOrder.id}`)
  
  clear()
  
  itemsForDB.map( async(item )=> {

    
    const itemRef = doc(db, "products", item.id);
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(itemRef, {
      stock: increment(-item.quantity)
    })
    
  })
}

  return (
    <>
     <div className="container mt-3 mb-5 justify-content-center"> 
        <h2>tu bolsa</h2>
     <ol className="list-group ">
        

        {
          cartList.length  ?

          cartList.map(item =>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                <div className="ms-2 me-auto">
                <img src={item.img} class="img-responsive" alt={item.title} width={50} height={50} />
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
                <button onClick={createOrder}>Terminar compra</button>
                <span className="badge bg-primary rounded-pill">TOTAL: ${totalPrice()}</span>
          </div>
          }
            </ol>
            
         </div> 
    
    </>
  );
};

export default Cart;
