import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-primary border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="bg" height="550px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">Nueva Colección</h5>
                <p class="card-text lead fs-2 fw-bolder">
                    Aprovecha nuestras promociones
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
