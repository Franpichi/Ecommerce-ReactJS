import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from '../Categorias/Categorias';
const Secciones = React.memo(() => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item"> <Link className="nav-link" to={"/"}>Inicio</Link></li>
                <li className="nav-item"> <Link className="nav-link" to={"/contacto"}>Contacto</Link></li>
                <Categorias/>
            </ul>
          </div>
    );
})

export default Secciones;