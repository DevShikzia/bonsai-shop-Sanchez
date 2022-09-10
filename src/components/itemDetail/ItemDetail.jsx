import ItemCount from "../itemCount/ItemCount";



const ItemDetail = ({title,stock,description,price,img}) => {

    const onAdd = (quantity) => {
        if(quantity !== 0){
            alert(`agregaste ${quantity} a tu bolsa de compra`)
   }
}

    return (
    
<div className="card border border-0 mb-3 mt-3">
  <div className="row justify-content-around">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt={`imagen de ${title}`}/>
    </div>
    <div className="col-md-5 d-flex flex-column text-center">
      <div className="card-body">
        <h2 className="card-title h1 text-uppercase">{title}</h2>
        <div className="mt-5">
        <p className="card-text h3 ">${price}</p>
        <p className="card-text pt-5 h5">Stock: {stock}</p>
        </div>
      </div>
      <div>
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
      </div>                           
       </div>
  </div>
 
  <div className="accordion m-4" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header " id="headingOne">
      <button className="accordion-button text-light bg-dark " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Descripcion
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>{description}</p>
      </div>
    </div>
  </div>
  </div>
</div>


    );
  };
  
  export default ItemDetail;