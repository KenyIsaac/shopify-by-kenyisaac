import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4 text-primary" href="#">
            ShopiKeny
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-primary" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">
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
