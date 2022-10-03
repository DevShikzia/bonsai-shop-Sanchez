

const Spinner = () => {

    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
       <div className="text-center mb-5">
        <div className="spinner-border" style={{width: "10rem", height: "10rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
       </div>
      </div>     
      </div>

    )
 


}


export default Spinner;