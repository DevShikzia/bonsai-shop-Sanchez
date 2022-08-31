import ItemCount from "../itemCount/ItemCount";

const ItemListContainer = ({greeting,quantity}) => {

    const onAdd = (quantity) => {
         if(quantity !== 0){
             alert(`agregaste ${quantity} a tu bolsa de compra`)
    }
}

 
    return (
        <div className="d-flex justify-content-center align-items-center flex-column ">
        
        <h2>{greeting}</h2>
         
         <ItemCount stock = {5} initial = {1} onAdd ={onAdd} />
        
        </div>

    );

}

export default ItemListContainer