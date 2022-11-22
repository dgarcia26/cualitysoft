import React, { useEffect, useState } from 'react'
import {db} from '../firebase'

export const Registro = (props) => {
    const [nombre,setNombre]=useState('')
    const [apellido,setApellido]=useState('')

    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [solicitud, setSolicitud] = useState('')


    const [id,setId]=useState('')
    const [lista,setLista]=useState([])
    const [modoEdicion,setModoEdicion]=useState(false)
    const [error,setError]=useState(null)

    useEffect(()=>{
    
    const obtenerDatos=async()=>{
      
      try {
        //const db=firebase.firestore()
        const  data=await db.collection(props.user.email).get()
        const arrayData=data.docs.map((documento)=>({id:documento.id,...documento.data()}))
        setLista(arrayData)
        //console.log(arrayData);
        } catch (error) {
        console.log(error);        
      }
      }

      // eslint-disable-next-line
      obtenerDatos();
      // eslint-disable-next-line
    },[])

    const guardarDatos=async(e)=>{
      e.preventDefault()
      if (!nombre.trim()){
        setError('Ingrese Nombre')
        return
      }
      if (!apellido.trim()){
        setError('Ingrese Apellido')
        return
      }
      if (!celular.trim()){
        setError('Ingrese Celular')
        return
      }
      if (!email.trim()){
        setError('Ingrese Email')
        return
      }
      if (!direccion.trim()){
        setError('Ingrese Dirección')
        return
      }
      if (!ciudad.trim()){
        setError('Ingrese Ciudad')
        return
      }
      if (!categoria.trim()){
        setError('Ingrese Categoria')
        return
      }
      if (!solicitud.trim()){
        setError('Ingrese Solicitud')
        return
      }
      try {
        //const db=firebase.firestore()
        const nuevoUsuario={
          nombre,apellido,celular,email,direccion,ciudad,categoria,solicitud
        }
        //Agrega a la base de datos de firabase
        const dato=await db.collection(props.user.email).add(nuevoUsuario)
        //Agregar a lista
        setLista([
          ...lista,
          {id:dato.id,...nuevoUsuario}
        ])
      } catch (error) {
        
      }
      // Limpiar estados
      setNombre('')
      setApellido('')
      setCelular('')
      setEmail('')
      setDireccion('')
      setCiudad('')
      setCategoria('')
      setSolicitud('')
      setId('')
      setError(null)

    }

    //Eliminar dato
    const eliminarDato=async(id)=>{
      try {
        //const db=firebase.firestore()
        await db.collection(props.user.email).doc(id).delete()
        const listaFiltrada=lista.filter((elemento)=>elemento.id!==id)
        setLista(listaFiltrada)

      } catch (error) {
        
      }
    }

    //Funcion para activar el modo edicion

    const editar=(elemento)=>{
      setModoEdicion(true)
      setNombre(elemento.nombre)
      setApellido(elemento.apellido)
      setCelular(elemento.celular)
      setEmail(elemento.email)
      setDireccion(elemento.direccion)
      setCiudad(elemento.ciudad)
      setCategoria(elemento.categoria)
      setSolicitud(elemento.solicitud)
      setId(elemento.id)
      
    }

      // Funcion para editar datos
      const editarDatos=async(e)=>{
        e.preventDefault()
  
        if (!nombre.trim()){
          setError('Ingrese Nombre')
          return
        }
        if (!apellido.trim()){
          setError('Ingrese Apellido')
          return
        }
        if (!celular.trim()){
          setError('Ingrese Celular')
          return
        }
        if (!email.trim()){
          setError('Ingrese Email')
          return
        }
        if (!direccion.trim()){
          setError('Ingrese Dirección')
          return
        }
        if (!ciudad.trim()){
          setError('Ingrese Ciudad')
          return
        }
        if (!categoria.trim()){
          setError('Ingrese Categoria')
          return
        }
        if (!solicitud.trim()){
          setError('Ingrese Solicitud')
          return
        }
        try {
          //const db=firebase.firestore()
          await db.collection(props.user.email).doc(id).update({nombre,apellido})
          const listaEditada=lista.map((elemento)=>elemento.id===id ? {id,nombre,apellido,celular,email,direccion,ciudad,categoria,solicitud}:elemento)
          setLista(listaEditada)
          setModoEdicion(false)
          setNombre('')
          setApellido('')
          setCelular('')
          setEmail('')
          setDireccion('')
          setCiudad('')
          setCategoria('')
          setSolicitud('')
          setId('')
          setError(null)
        } catch (error) {
          console.log(error);
        }
      }
  
    return (
    <div className="container">
      <div className="row">
      <div className="col-12">
      <h2 className="text-center">{modoEdicion ? 'Edicion del Servicios' : 'Registro de Servicios'}</h2>
      {
        error ? (<div className="alert alert-danger" role="alert">
          {error}   
        </div>):null
      }
      <form onSubmit={modoEdicion ? editarDatos : guardarDatos}>
        <input type="text" placeholder="Ingrese Nombre" 
        className="form-control my-2 text-center"
        onChange={(e)=>{setNombre(e.target.value)}}
        value={nombre}
        />
        <input type="text" placeholder="Ingrese Apellido" 
        className="form-control my-2 text-center"
        onChange={(e)=>{setApellido(e.target.value)}}
        value={apellido}
        />
              <input type="text"
                className="form-control mb-3 text-center"
                placeholder='Ingrese Celular'
                value={celular}
                onChange={(e) => setCelular(e.target.value)} required
              />
              <input type="text"
                className="form-control mb-3 text-center"
                placeholder='Ingrese Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
              />
              <input type="text"
                className="form-control mb-3 text-center"
                placeholder='Direccion'
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)} required
              />
              <input type="text"
                className="form-control mb-3 text-center"
                placeholder='Ciudad'
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)} required
              />
              <input type="text"
                className="form-control mb-3 text-center"
                placeholder='Categoria (Nevera, Aire, PC, Electrico)'
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)} required>
              </input>                        
                <div class="form-floating">
                  <textarea class="form-control" placeholder='Ingrese solicitud' id="floatingTextarea" value={solicitud}
                  onChange={(e)=>setSolicitud(e.target.value)} required></textarea>
                  <label for="floatingTextarea">Solicitud</label>                 
                </div>
                <br />
        <div className="d-grid gap-2">
          {
        modoEdicion ? <button className="btn btn-success" type="submit">Editar</button>: 
        <button className="btn btn-outline-primary" type="submit">Agregar</button>
      }
        </div>
      </form>
      </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Servicios Registrados</h2>
          <ul className="list-group">
          {
            lista.map(
              (elemento)=>(
            <li className="list-group-item" key={elemento.id}>{elemento.nombre} - {elemento.apellido} - {elemento.solicitud} - {elemento.categoria}
            <br />{elemento.celular} - {elemento.direccion}
              


            <button className="btn btn-warning float-end mx-2"
            onClick={()=>editar(elemento)}
            >Editar</button>

            <button className="btn btn-danger float-end mx-2"
            onClick={()=>eliminarDato(elemento.id)}
            >Eliminar</button>
            </li>
            ))
          }
         </ul>
        </div>
      </div>
    </div>
  );
}
