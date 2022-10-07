
import { Link } from "react-router-dom";

const Item = ({id,title,stock,description,price,img}) => {
  return (
    <>  
    <div className="col">
    <div className="card text-center ">
        <Link to={`/product/${id}`}>
     <img src={img} className="card-img-top" alt="..."/>
     </Link>
      <div className="card-body">
      <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">Stock disponible: {stock}</p>
        <p className="card-text fw-bold">${price}</p>
        <div className="card-footer">
        <small className="text-muted"> <Link to={`/product/${id}`}>Mas Detalles</Link></small>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Item;
