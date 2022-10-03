import {Link} from 'react-router-dom';

const ButtonCart = () => {
    return (
      <>  
        <Link to={'/cart'}> <button className={ `btn btn-success`}>Terminar compra</button> </Link>
      </>
    );
  };
  
  export default ButtonCart;
  