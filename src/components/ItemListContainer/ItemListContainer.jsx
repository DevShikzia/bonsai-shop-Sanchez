import ItemCount from "../itemCount/ItemCount";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({greeting}) => {

    const onAdd = (quantity) => {
         if(quantity !== 0){
             alert(`agregaste ${quantity} a tu bolsa de compra`)
    }
}

 
    return (
        <div className=" container mt-3 mb-5 justify-content-center">
        
        {/* <h2>{greeting}</h2> */}
         
          {/* <ItemCount stock = {5} initial = {1} onAdd ={onAdd} />  */}
          <ItemList/>
        </div>
    
    );

}

export default ItemListContainer