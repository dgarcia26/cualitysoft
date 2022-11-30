import React from "react";
import {Link, Outlet} from "react-router-dom"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate=useNavigate()
    const cerrarsesion=()=>{
        auth.signOut()
        .then(()=>{
            navigate("/login")
        })
    }
    return (
        <div className="sticky-top"> 
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                            <Link className="navbar-brand" to="/">MultiServicios</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>                
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <div className="d-flex">
                            <Link className="nav-link" to="/"><button type="button" class="btn btn-light">Inicio</button></Link>
                            {
                                props.firebaseUser !== null ? (
                                    //<Link className="nav-link" to="/admin"><button type="button" class="btn btn-light">Admin</button></Link>
                                    <Link className="nav-link" to="/Sesion"><button type="button" class="btn btn-light">Sesion</button></Link>
                                ) :
                                    null

                            }
                            
                            {
                                props.firebaseUser !== null ? (
                                    <button class="btn btn-light"
                                        onClick={() => { cerrarsesion() }}
                                    >Logout</button>
                                ) :
                                    (<Link className="nav-link" to="/login"><button type="button" class="btn btn-secondary">Login</button></Link>
                                    )
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
            <main className="App-content">
            <Outlet />
            </main>
        </div>
    )
}

export default Navbar