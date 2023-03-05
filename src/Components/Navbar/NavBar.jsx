import React from 'react';
import Secciones from './Secciones/Secciones';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
            <Link className="nav-link" to={"/"}><div className="navbar-brand">Horologium</div></Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                </ul>
            <CartWidget/>
            </div>
</nav>
    );
}

export default NavBar;
