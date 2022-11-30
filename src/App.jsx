import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Inicio from "./components/Inicio"
import Login from "./components/Login"
import Admin from "./components/Admin"
import Navbar from "./components/Navbar"
import {auth} from './firebase'
import Sesion from "./components/Sesion";


function App (){
    const [firebaseUser,setFirebaseuser]=React.useState(false)
    React.useEffect(()=>{
        auth.onAuthStateChanged(user=>{
        console.log(user)
        if (user){
            setFirebaseuser(user)
        }else{
            setFirebaseuser(null)
        }
        
        })
    },[])
    return firebaseUser!==false ?(
        <Router>
            <div>
                <Navbar firebaseUser={firebaseUser}/>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="Sesion" element={<Sesion/>}/>
                </Routes>
            </div>
        </Router>
    ):
    (<h1>Cargando...</h1>);
}

export default App