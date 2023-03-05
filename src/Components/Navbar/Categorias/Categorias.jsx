import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = React.memo(() => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/Gold"}>Gold</Link></li>
            <li><Link className="dropdown-item" to={"/category/Premium"}>Premium</Link></li>
            <li><Link className="dropdown-item" to={"/category/Regular"}>Regular</Link></li>
            <li><Link className="dropdown-item" to={"/category/Basico"}>Básico</Link></li>
          </ul>
        </li>

    );
})

export default Categorias;



