// import "./Item.css";



const Item = ({title,stock,description,price,img}) => {
  return (
    <>  
    <div className="col">
    <div className="card text-center ">
        <a href="/">
     <img src={img} className="card-img-top" alt="..."/>
     </a>
      <div className="card-body">
      <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">Stock disponible: {stock}</p>
        <p className="card-text fw-bold">${price}</p>
        <div className="card-footer">
        <small className="text-muted"> <a href="/">Mas Detalles</a></small>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Item;
