import React from "react";
import {auth,db} from '../firebase'
import { useNavigate } from "react-router-dom";

const Login = () =>{
    //Hooks
    const [email,setEmail]=React.useState('')
    const [pass,setPass]=React.useState('')
    const [modoRegistro,setModoRegistro]=React.useState(true)
    const [error,setError]=React.useState(null)
    const navigate=useNavigate()
    const guardarDatos=(e)=>{
       e.preventDefault()
       if(!email.trim()){
        setError('Ingrese Correo')
        return
       }
       if(!pass.trim()){
        setError('Ingrese Contraseña')
        return
    }
    if(pass.length<6){
        setError('Minimo 6 caracteres')
        return
    }
    setError(null)
    if(modoRegistro){
        registrar()
    }else{
        Login()
    }
}
const Login=React.useCallback(async()=>{
try {
    const res=await auth.signInWithEmailAndPassword(email,pass)
    console.log(res.user)
    setEmail('')
    setPass('')
    setError('')
    navigate('/admin')
} catch (error) {
    console.log(error.code)
    if (error.code==='auth/user-not-found'){
        setError('Usuario no existe')
    }
    if (error.code==='auth/wrong-password'){
        setError('Contraseña incorrecta')
    }
}
},[email,pass,navigate])
const registrar=React.useCallback(async()=>{
    try {
        const res=await auth.createUserWithEmailAndPassword(email,pass)
        console.log(res.user)
        await  db.collection('usuariosdb').doc(res.user.email.pass).set(
            {
                email:res.user.email,
                id:res.user.uid
            }        
        )
        setEmail('')
        setPass('')
        setError(null)
    } catch (error) {
        console.log(error)
        if (error.code==='auth/email-already-in-use'){
            setError('Correo ya registrado')
        }
        if (error.code==='auth/invalid-email'){
            setError('Correo incorrceto.')
        }
    }
},[email,pass])
    return (
        <div>
            <div className="row justify-content-center my-3">
                <div className="col-12 col-sm-10 col-md-6 col-xl-4">
                    <form onSubmit={guardarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}


                                </div>
                            )
                        }
                        <input type="email"
                        placeholder="Ingresar correo"
                        className="form-control mb-3"
                        onChange={e=>setEmail(e.target.value)}
                        value={email}
                        />
                        <input type="password"
                        placeholder="Ingresar contraseña"
                        className="form-control mb-3"
                        onChange={e=>setPass(e.target.value)}
                        value={pass}
                        />
                        <div className="d-grid gap-2">
                        <button className="btn btn-success">{
                            modoRegistro ? 'Registrarse' : 'Acceder'
                         }
                        </button>
                        <button className="btn btn-outline-primary" 
                        onClick={()=>{setModoRegistro(!modoRegistro)}}
                        type='button'
                        >{
                            modoRegistro ? 'Ya esta registrado?': 'No tienes cuenta?'
                        }</button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login