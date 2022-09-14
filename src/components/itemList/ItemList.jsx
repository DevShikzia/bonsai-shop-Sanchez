
import Item from "../item/Item";



const ItemList = ({items}) => {
    
    return (
            <>
        
          {
            

            items.map(item => (  
                <Item
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.pintureURL}
                stock={item.stock}
                price={item.price}
                 />

            )
            ) 
    
          }
          
       </>
    );
  };
  
  export default ItemList;