import React from "react";
import Products from "./Products"

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-primary border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="bg" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">Nueva Colección</h5>
                <p className="card-text lead fs-2 fw-bolder">
                    Aprovecha nuestras promociones
                </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
