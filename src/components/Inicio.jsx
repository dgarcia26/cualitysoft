import React from "react";


const Inicio = () =>{




return (
    <div className="text-center">
        <h1 className="titulo">MultiServicios</h1>
      <hr />
      <section>
      {/*<!-- Example Code -->*/}
    
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="1600" height="760"/>
            </div>
            <div class="carousel-item">
              <img src="https://i.picsum.photos/id/625/2507/1674.jpg?hmac=ZuCWygmEqFbv5q0hlD-jimDTtYWRwgAebHLepuXaUUk" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="1600" height="760"/>
            </div>
            <div class="carousel-item">
              <img src="https://i.picsum.photos/id/1084/4579/3271.jpg?hmac=YblMazviSugJVfZsFPaFI_Vp6lBeQin62qpm8rxHruo" class="bd-placeholder-img bd-placeholder-img-lg" 
              alt="..." width="1600" height="760"/>
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
    
    {/*<!-- End Example Code -->*/}


      </section>
    </div>
)
}

export default Inicio