
import Item from "../item/Item";


const ItemList = ({items}) => {
    
    return (
  
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3 mb-5">
          {
            
            items.length ?

            items.map(item => (  
                <Item
                key={item.id}
                title={item.title}
                img={item.pintureURL}
                stock={item.stock}
                price={item.price}
                 />

            )
            ) 
            : 
            <div className="text-center">
             <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
           </div>
        
          }
          </div>
    
    );
  };
  
  export default ItemList;