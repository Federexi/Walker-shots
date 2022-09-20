import man from '../striding-man.jpg';
import instagram from '../instagram.png';
import twitter from '../twitter.png';

function Footer() {
    return(
    <div className="d-flex flex-column min-vh-100">
  <footer className="text-center text-lg-start mt-auto">
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        <span>Conoce nuestras redes sociales:</span>
        </div>

        <div>
        <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"><img src={instagram}></img> </i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-twitter"><img src={twitter}></img> </i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 link-secondary">
            <i class="fab fa-github"></i>
        </a>
        </div>
    </section>

    <section class="">
        <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 text-secondary"></i>Walker Shots <img src={man} alt="Hombre caminando" width="30" height="24" className="d-inline-block align-text-top hombre"></img>
            </h6>
            <p>
                Walker Shots es una empresa creada para estar con vos en el momento indicado
            </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                Productos
            </h6>
            <p>
                <a href="#!" class="text-reset">Vinos</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Espirituosas</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Espumantes</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Laravel</a>
            </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                Links
            </h6>
            <p>
                <a href="#!" class="text-reset">Franquicias</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Ajustes</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Ordenes</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Ayuda</a>
            </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> CABA, Buenos Aires 1424, AR</p>
            <p>
                <i class="fas fa-envelope me-3 text-secondary"></i>
                walker@shots.com
            </p>
            <p><i class="fas fa-phone me-3 text-secondary"></i> + 54 11  3513 3212</p>
            <p><i class="fas fa-print me-3 text-secondary"></i> + 54 11 5031 9053</p>
            </div>
        </div>
        </div>
    </section>

    <div class="text-center p-4">
        © 2022 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">WalkerShots.com</a>
    </div>
  </footer>
</div>
    )
}

export default Footer;