import React from "react";
import img from "/workspaces/spain44-g3-landing-page-with-react/src/img/GitHub-Logo.png";


export const MyFooter = () => {
  return (
    <div className="container">
      <footer className="footer py-2 my-2">
        <p className="nav-item"><a href="#" className="nav-link px-1 text-white">Cohorte-44-Spain</a></p>
        <ul className="nav d-inline-flex border-bottom pb-2 mb-2">
          <li className="nav-item d-flex">
            <a href="https://www.linkedin.com/in/yuliya-bundur/" className="nav-link px-2 text-white">Yuliya Bundur</a>
            <a href="https://github.com/yuliyabundur" target="_blank" className="nav-link px-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>
          {/* 1. El anchor de LinkedIn tiene que estar cerrado.
2. Copiar las clases del primer anchor en el segundo, quitar el rel
3. Eliminar la img y reemplazar por svg  */}
          <li className="nav-item d-flex">
            <a href="https://www.linkedin.com/in/carlos-duarte-rodr%C3%ADguez-bb2678174/" className="nav-link px-2 text-white">Carlos Duarte</a>
            <a href="https://github.com/CarlosDuarteRod" target="_blank" className="nav-link px-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>

          <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Jorge Muñoz<a href="https://github.com/JorgeMunoz1991" target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src="GitHub-Logo.png" alt="GitHub" />
          </a></a>
          </li>

          <li className="nav-item"><a href="https://www.linkedin.com/in/hector-chocobar/" className="nav-link px-2 text-white">Héctor Chocobar<a href="https://github.com/hchocobar" target="_blank" rel="noopener noreferrer">
            <img className="github-logo" src="GitHub-Logo.png" alt="GitHub" />
          </a></a>
          </li>

          <li className="nav-item">
            <a href="https://www.linkedin.com/in/jrdelriod/" className="nav-link px-2 text-white">José Del Río<a href="https://github.com/jrdelrio" target="_blank" rel="noopener noreferrer">
              <img className="github-logo" src="GitHub-Logo.png" alt="GitHub" /></a>
            </a>
          </li>

        </ul>
        <p className="bottom-item text-center text-white">
          <a href="https://4geeksacademy.com/" className="buttom-link px-1 text-white">© 4Geeks Academy</a>
        </p>
      </footer>
    </div>
  )
}