export const Footer = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <h5 className="mb-3">
                <i className="bi bi-shop me-2"></i>
                Tienda Andel
                </h5>
                <p><small>
                Tu tienda de confianza para encontrar los mejores zapatos. 
                Calidad, estilo y comodidad en cada paso.
                </small></p>
            </div>

            <div className="col-md-4">   
            </div>

            <div className="col-md-4">
                <h5 className="mb-3">Contacto</h5>
                <div className="mb-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    Av. Bolivar entre Calle La Paz y Calle Potosi
                    </div>
                    <div className="mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    +591 67392842
                    </div>
                    <div className="mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    info@tiendaandel.com
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="align-items-center row">
            <div className="col-md-6">
                <p className="mb-0">
                © 2024 Tienda Andel. Todos los derechos reservados.
                </p>
            </div>

            <div className="text-md-end col-md-6">
                <div>
                    <a href="#" className="text-dark me-3">
                        <i className="bi bi-facebook fs-5"></i>
                    </a>
                    <a href="#" className="text-dark me-3">
                        <i className="bi bi-whatsapp fs-5"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;