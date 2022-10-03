import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const NavBar = () => {
 
    return (
 <header>    
  <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <Link className="navbar-brand" to={"/"}>bonsai shop</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link"  to={"/category/1"}>plantas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/category/2"}>Arboles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/category/3" >Cuidados</Link>
          </li>
        </ul>
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to={"/user"}><i className="bi bi-person-fill"></i></Link>
          </li>
          <li className="nav-item">
            <CartWidget/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    )
}

export default NavBar