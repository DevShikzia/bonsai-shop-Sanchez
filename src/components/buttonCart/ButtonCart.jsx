import {Link} from 'react-router-dom';

const ButtonCart = () => {
    return (
      <>  
        <Link to={'/cart'}> <button className={ `btn btn-success`}>Ir a la bolsa</button> </Link>
      </>
    );
  };
  
  export default ButtonCart;
  