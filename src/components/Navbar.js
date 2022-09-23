import {Link} from 'react-router-dom'
import man from '../striding-man.jpg';
import '../App.css';
import Carrito from './CartWidget';

const Blanco = { color: 'white' };

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-fondo">
         <div className="container-fluid">
           <Link to="/"> <a style={Blanco} className="navbar-brand">
            Walker Shots
            <img src={man} alt="Hombre caminando" width="30" height="24" className="d-inline-block align-text-top"></img>
            </a> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto ">
              <Link to="/category/1"><a style={Blanco} className="nav-link active" aria-current="page">Vinos</a></Link>
              <Link to="/category/2"> <a style={Blanco} className="nav-link active">Espirituosas</a> </Link>
              <Link to="/category/3"> <a style={Blanco} className="nav-link active titulo">Espumantes</a> </Link>
            </div>
            <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                  <Carrito/>
            </ul>
          </div>
         </div>
        </nav>
    );
}

export default Navbar;