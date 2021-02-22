import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="menu">
                    <nav className="navBar">
                        <a className="pagina">Drinks</a>
                        <a className="pagina">Sobre Nós</a>
                        <a className="pagina">Bons Drinks</a>
                        <a className="pagina">Nosso Time</a>
                        <a className="pagina">Contato</a>
                    </nav>
                </header>
            </div>
        )
    }
}
