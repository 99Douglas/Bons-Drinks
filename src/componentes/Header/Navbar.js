import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/" className="item">Drinks</Link>
                    <Link to="/sobre" className="item">Sobre Nós</Link>
                    <Link to="/" className="item itemPrincipal">Bons Drinks</Link>
                    <Link to="/time" className="item">Nosso Time</Link>
                    <Link to="/contato" className="item">Contato</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;