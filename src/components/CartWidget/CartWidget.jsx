
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "../cartContext/CartContext";

import './CartWidget.css'



const CartWidget = () =>{

    const {cartList,handbag} = useContext(CartContext)

    return (
    
        <Link className="nav-link"  to={"/cart"}>

            {
            cartList.length
                ?
                 <i className="bi bi-bag"><span className="cantidad">{handbag()}</span></i>
                :
                 <i className="bi bi-bag"></i>
            }
            </Link> 

    )



}


export default CartWidget;