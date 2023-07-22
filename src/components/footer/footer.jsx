import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white">
      <div className="row line">
        <div className="col-6 col-md-3 mt-5">
          <div className="vass-header ">Somos Vass</div>
          <div className="menu-menu-footer-corporativo-container">
            <ul className="p-0">
              <li>
                <a href="/">complex</a>
              </li>
              <li>
                <a href="/">made</a>
              </li>
              <li>
                <a href="/">simple</a>
              </li>
            </ul>
          </div>
          <div className="img-vass">
            <a href="/">
              <img
                src="https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="col-6 col-md-3 mt-5">
          <div className="vass-header ">Sitemap VASS</div>
          <div className="menu-menu-footer-corporativo-container">
            <ul className="p-0">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Caso éxito</a>
              </li>
              <li>
                <a href="/">somos VASS</a>
              </li>
              <li>
                <a href="/">Impactos</a>
              </li>
              <li>
                <a href="/">Método</a>
              </li>
              <li>
                <a href="/">Tecnología</a>
              </li>
              <li>
                <a href="/">Proyecto l+D+i</a>
              </li>
              <li>
                <a href="/">insights</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141484">
                <a href="/">noticias</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141484">
                <a href="/">VASS Research</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141484">
                <a href="/">Canal de denuncias</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141484">
                <a href="/">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3 mt-5">
          <div className="vass-header ">Sistemap Talento</div>
          <div className="menu-menu-footer-corporativo-container">
            <ul className="p-0">
              <li>
                <a href="/">Talento</a>
              </li>
              <li>
                <a href="/">#LiveVASS</a>
              </li>
              <li>
                <a href="/">Bemeficios</a>
              </li>
              <li>
                <a href="/">Planes para ti</a>
              </li>
              <li>
                <a href="/">Proyectos</a>
              </li>
              <li>
                <a href="/">Smartworking</a>
              </li>
              <li>
                <a href="/">Ofertas</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-3 mt-5">
          <div className="vass-header ">Empresas</div>
          <div className="menu-menu-footer-corporativo-container">
            <ul className="p-0">
              <li>
                <a href="/">VASS</a>
              </li>
              <li>
                <a href="/">Nateevo</a>
              </li>
              <li>
                <a href="/">Serbatic</a>
              </li>
              <li>
                <a href="/">vdSOHP</a>
              </li>
            </ul>
          </div>
          <div className="col-12 d-flex justify-content-evenly pt-5 py-3">
            <i class="bi bi-bezier2 me-1"></i>
            <i class="bi bi-boxes me-1"></i>
            <i class="bi bi-buildings-fill"></i>
          </div>
        </div>
        <div className="container-fluid line  py-4">
          <div className="row">
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
              <div className="copyright">
                &copy; {new Date().getFullYear()} Todos los derechos reservados
              </div>
            </div>
            <div className="col-12 col-md-4 py-3">
              <div className="policy-links text-center">
                <a href="/" className="decoration">
                  Memoria
                </a>{" "}
                |{" "}
                <a href="/" className="decoration">
                  Política de cookies
                </a>{" "}
                |{" "}
                <a href="/" className="decoration">
                  Política de privacidad
                </a>{" "}
                |{" "}
                <a href="/" className="decoration">
                  Política de calidad y medio ambiente
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-end py-3">
              <div className="icons">
                <i className="bi bi-twitter me-3"></i>

                <i className="bi bi-linkedin me-3"></i>

                <i className="bi bi-instagram me-3"></i>

                <i class="bi bi-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
