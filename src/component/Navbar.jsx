import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
            ShopiKeny
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-primary" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#">
                  Contáctanos
                </a>
              </li>
            </ul>
            <div className="buttons">
                <a href="" className="btn btn-outline-primary">
                    <i className="fa fa-sign-in me-1"></i>Iniciar Sesión</a>
                <a href="" className="btn btn-outline-primary ms-2">
                    <i className="fa fa-user-plus me-1"></i>Registro</a>
                <a href="" className="btn btn-outline-primary ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>Carrito (0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
