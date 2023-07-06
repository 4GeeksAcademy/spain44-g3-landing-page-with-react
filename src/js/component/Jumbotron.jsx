import React from "react";
export const Jumbotron = () => {

    const Imagen = "https://i.ytimg.com/vi/bQoXORzoQls/maxresdefault.jpg";
    return (
        <div className="my-5"  style={{
            backgroundImage: `url(${Imagen})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}>
              <div className="position-relative p-5 text-muted">
                <h1 className="text-body-emphasis text-info display-2 ">Anime World!</h1>
                <p className="col-lg-12 mb-4 text-white ">
                    <strong>¡Bienvenido a nuestra tienda de figuras de anime! En nuestra tienda encontrarás un universo de coleccionables que harán vibrar tu lado más fanático.</strong> 
                </p>
                <button className="btn btn-primary px-3 mb-5" type="button">
                    Ver Catálogo!
                </button>
            </div>
        </div>
    );
}
