import React from 'react'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Registro } from './Registro';

const Sesion = () => {
    const navegate = useNavigate();
    const [user, setUser] = React.useState(null);
    React.useEffect(() => {
      if (auth.currentUser) {
        console.log("Uusuario Existente");
        setUser(auth.currentUser);
      } else {
        console.log("Uusuario no encontrado");
        navegate("/login");
      }
    }, [navegate]);
    return (
    <div>
        {user && <Registro user={user} />}
    </div>
    );
}

export default Sesion