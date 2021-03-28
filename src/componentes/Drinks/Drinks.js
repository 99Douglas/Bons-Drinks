import React from 'react';
import Button from '../Button/Button';
import './drinks.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom';
import EstouComSorte from './EstouComSorte';
import BuscarDrinks from './BuscarDrinks';

const Drinks = () => {

    return (
        <div className="api">
            <section className="cabecalho">
                <div>
                    <h1 className="h1Drinks">
                        Drinks
                    </h1>
                </div>
                <div className="botaoPos">
                    <NavLink to="/drinks/buscar"><button className="botao">Buscar Drinks!</button></NavLink>
                    <NavLink to="/drinks/estoucomsorte"><button className="botao">Estou com sorte!</button></NavLink>
                </div>
            </section>
            <section className="conteudoDrink">
                <Switch>
                    <Route path="/drinks/buscar">
                        <BuscarDrinks />
                    </Route>
                    <Route path="/drinks/estoucomsorte">
                        <EstouComSorte />
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default Drinks
