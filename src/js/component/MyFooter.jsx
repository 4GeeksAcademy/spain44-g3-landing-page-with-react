import React from "react";
import img from "/workspaces/spain44-g3-landing-page-with-react/src/img/GitHub-Logo.png";


export const MyFooter = () => {
  return (
      <footer class=" container-fluid footer py-2 my-2">
        <p class="nav-item"><a href="#" class="nav-link px-1 text-white">Cohorte-44-Spain</a></p>
        <ul class="nav justify-content-center border-bottom pb-2 mb-2">
          <li class="nav-item d-inline"><a href="https://www.linkedin.com/in/yuliya-bundur/" class="nav-link px-2 text-white">Yuliya Bundur<a href="https://github.com/yuliyabundur" target="_blank" rel="noopener noreferrer">
            <img class="github-logo" src={img} alt="GitHub" className="github-logo" />
          </a></a>
          </li>

          <li class="nav-item"><a href="https://www.linkedin.com/in/carlos-duarte-rodr%C3%ADguez-bb2678174/" class="nav-link px-2 text-white">Carlos Duarte<a href="https://github.com/CarlosDuarteRod" target="_blank" rel="noopener noreferrer">
            <img class="github-logo" src={img} alt="GitHub" className="github-logo" />
          </a></a>
          </li>

          <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Jorge Muñoz<a href="https://github.com/JorgeMunoz1991" target="_blank" rel="noopener noreferrer">
            <img class="github-logo" src={img} alt="GitHub" className="github-logo" />
          </a></a>
          </li>

          <li class="nav-item"><a href="https://www.linkedin.com/in/hector-chocobar/" class="nav-link px-2 text-white">Héctor Chocobar<a href="https://github.com/hchocobar" target="_blank" rel="noopener noreferrer">
            <img class="github-logo" src={img} alt="GitHub" className="github-logo" />
          </a></a>
          </li>

          <li class="nav-item">
            <a href="https://www.linkedin.com/in/jrdelriod/" class="nav-link px-2 text-white">José Del Río<a href="https://github.com/jrdelrio" target="_blank" rel="noopener noreferrer">
              <img class="github-logo" src={img} alt="GitHub" className="github-logo" /></a>
            </a>
          </li>

        </ul>
        <p class="bottom-item text-center text-white">
          <a href="https://4geeksacademy.com/" className="buttom-link px-1 text-white">© 4Geeks Academy</a>
        </p>
      </footer>
  )
}

