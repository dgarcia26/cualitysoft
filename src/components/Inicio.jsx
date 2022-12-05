import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Inicio = () =>{

  
return (
    <div className="text-center">
        <h1 className="titulo">MultiServicios</h1>
      
      <section>
      
    
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3 linea"></button>
          </div>
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="100%" height="760"/>
            <div class="carousel-caption d-none d-md-block">
              <h1>Servicios Tecnologicos Profesionales</h1>
              <h6>Brindamos soporte tecnico especializado, a equipos de Escritorio, PC Portatiles, Todo en Uno. <br/>Celulares, Camaras de Seguridad, Servidores y mucho mas..
              </h6>              
            </div>
            </div>
            <div class="carousel-item">
              <img src="https://marketingblanco.com/imagenes/los-mejores-consejos-de-marketing-para-empresas-de-servicios-para-el-hogar.jpg" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="100%" height="760"/>
              <div class="carousel-caption d-none d-md-block">
              <h1>Servicios Hogar</h1>
              <h6>Brindamos soporte tecnico especializado, a equipos de Escritorio, PC Portatiles, Todo en Uno. <br/>Celulares, Camaras de Seguridad, Servidores y mucho mas..
              </h6>              
            </div>
            </div>
            <div class="carousel-item">
              <img src="https://blog.linio.com.mx/wp-content/uploads/2021/11/Electrodomesticos-de-linea-blanca.jpg" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="100%" height="760"/>              
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>    
    
    </section>
        <hr />
        <section>
          <div>
            <h1>Servicios Tecnologicos</h1>
            <div className="row">
              <div className="col-4 m-5 container">
              <p>Ofrecemos todo tipo de soporte tecnologico, a equipos de escritorio, todo en uno, equipos portatiles, Celulares, Camaras de Seguridad, servidores de datos y telefonia IP
                donde llegamos hasta su casa o domicilio para que sienta mas comodidad.
                Nuestro equipo de trabajo esta conformado por personal altamente califcado, que posee experiencia y gran conocimiento en el campo, todo disponible para solucionar sus problemas.
              </p>
              <Link to="/Login"><button className="btn btn-success" type="submit">
                  Solicitar...
                  </button>
              </Link>
              </div>
              <div className="col-6">
                <img src="https://serviciotecnico-dc.com/wp-content/uploads/2021/12/cropped-cropped-tecnologias-informacion.jpg" alt="" 
                width="900" height="500"/>
              </div>              
            </div>
                        
          </div>

        </section>
        <hr />
        <section>
          <div class="container text-center hogar">
            <h1>Servicios Gasodomesticos y Linea Blanca</h1>
            <div className="row">                   
                <div class="card col m-1">
                  <img src="https://apollo-virginia.akamaized.net/v1/files/8c4l05dfn2z7-CO/image;s=850x0" class="card-img-top" alt="..."
                  width="250" height="300"/>
                    <div class="card-body">
                      <h5 class="card-title">Estufas</h5>
                      <p class="card-text">Ofrecemos nuestros servicios en cuanto a equipos Gasodomesticos, Linea Blanca.</p>                      
                    </div>                
                </div>
                 
                <div class="card col m-1">
                  <img src="https://i.blogs.es/812b46/duo2/1366_2000.jpg" class="card-img-top" alt="..."
                  width="250" height="300"/>
                    <div class="card-body">
                      <h5 class="card-title">Lavadora - Secadora</h5>
                      <p class="card-text">Muy usuado dentro del Hogar y muy fundamental para las lavores diarias, nuestro personal esta para atenderlo.</p>                      
                    </div>                
                </div>
                 
                <div class="card col m-1">
                  <img src="https://www.confrio.com.co/catalogo/images/alquiler_equipos.jpg" class="card-img-top" alt="..."
                  width="250" height="300"/>
                    <div class="card-body">
                      <h5 class="card-title">Nevera - Aire Acondicionado</h5>
                      <p class="card-text">Dejamos a disposicion ls servicos prestados para solucionar todo tipo de daño en cuanto a neveras, nevecones, aires acondicionados.</p>                      
                    </div>                
                </div>
                <Link to="/Login"><button className="btn btn-success" type="submit">
                  Solicitar...
                  </button>
              </Link>
                
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="row">
            <h1>Servicios Hogar</h1>
              <div className="col-6 m-2">
                <img src="https://aiginiakos.gr/wp-content/uploads/2022/05/shutterstock_164852135-e1593077044741.jpg" alt="" 
                width="500" height="300"/>
              </div>
              <div className="col-4 m-5 container">
                <p>Todo lo relacionado al hogar, temas electricos, electronicos, plomeria, cerrajeria, instalaciones de cableado de datos, ofrecemos la experiencia en cuanto a maestro de obras, albañiles y demas personal.
                  Todo estos servicios en un solo lugar, en una sola plataforma, sin salir de casa, desde su comodidad del hogar, oficina u otro espacio.
                </p>
                <Link to="/Login"><button className="btn btn-success" type="submit">
                  Solicitar...
                  </button>
              </Link>
              </div>
            </div>
        </section>
        <hr />
        
        <section className="new">
          
        </section>

        <Footer/>


      
    </div>
)
}

export default Inicio