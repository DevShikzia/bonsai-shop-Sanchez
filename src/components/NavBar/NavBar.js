import CardWidget from '../CardWidget/CardWidget'

import './NavBar.css'

const NavBar = () => {
 
    return (
 <header>    
  <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <a className="navbar-brand" href="#">bonsai shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link"  href="#">plantas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">semillas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" >agroquímicos</a>
          </li>
        </ul>
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-person-fill"></i></a>
          </li>
          <li className="nav-item">
            <CardWidget/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
    )
}

export default NavBar