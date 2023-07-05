import React from "react";
import image1 from "../../img/figura1.jpg"
import image2 from "../../img/figura2.jpg"
import image3 from "../../img/figura3.jpg"
import image4 from "../../img/figura4.jpg"

export const MyCard = () => {
  const urlimgen1 = "https://m.media-amazon.com/images/I/81ZfO3F8edL.jpg"
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={image1} className="card-img-top" alt="Image 1" />
            <div className="card-body text-center"> 
              <h3 className="card-title">Rengoku</h3>
              <p className="card-text">Figura detallada de Rengoku de la película de Kimetsu no Yaiba.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary w-50">Comprar</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image2} className="card-img-top" alt="Image 1" />
            <div className="card-body text-center"> 
              <h3 className="card-title">Zoro</h3>
              <p className="card-text">Figura detallada de Roronoa Zoro de la serie One Piece.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary w-50">Comprar</button> 
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image3} className="card-img-top" alt="Image 1" />
            <div className="card-body text-center"> 
              <h3 className="card-title">Ichigo</h3>
              <p className="card-text">Figura detallada de Kurosaki Ichigo en forma de Hollow de la serie Bleach.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary w-50">Comprar</button> 
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image4} className="card-img-top" alt="Image 1" />
            <div className="card-body text-center"> 
              <h3 className="card-title">Hawkeye</h3>
              <p className="card-text">Figura detallada de Hawkeye de la serie One Piece.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary w-50">Comprar</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
