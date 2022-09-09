import twitter from '../twitter.png';
import instagram from '../instagram.png';
import man from '../striding-man.jpg';
import '../App.css';
import Carrito from './CartWidget';

const Blanco = { color: 'white' };

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-fondo">
         <div className="container-fluid">
           <a style={Blanco} className="navbar-brand" href="#">
            Walker Shots
            <img src={man} alt="Hombre caminando" width="30" height="24" className="d-inline-block align-text-top"></img>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a style={Blanco} className="nav-link active" aria-current="page" href="#">Vinos</a>
              <a style={Blanco} className="nav-link active" href="#">Licores</a>
              <a style={Blanco} className="nav-link active" href="#">Cervezas</a>
            </div>
            <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                  <Carrito/>
                  <li className="nav-item"><a className="nav-link" href="#"> <img src={twitter} alt="twitter"></img> </a> </li>
                  <li className="nav-item"><a className="nav-link" href="#"> <img src={instagram} alt="instagram"></img> </a> </li>
            </ul>
          </div>
         </div>
        </nav>
    );
}

export default Navbar;