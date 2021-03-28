import React from 'react';
import Button from '../Button/Button';
import './buscarDrinks.css';
import {drinksAle} from '../../Models/ArquivoFetch';
import {useState, useEffect} from 'react';

const BuscarDrinks = () => {
    const [dadosApi, setDadosApi] = useState("");

    async function teste (){
        const req = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        const dados = await req.json();
        console.log(dados)
        setDadosApi(dados)
    }


    return (
        <div className="api">
            <section className="cabecalho">
                <div>
                    <h1 className="h1Drinks">
                        Drinks
                    </h1>
                </div>
                <div className="botaoPos">
                    <Button estilo="botao" noClick={teste} titulo="Estou com sorte!" />
                    <Button estilo="botao" titulo="Buscar Drinks" />
                </div>
            </section>
            <section className="conteudoDrink">
                <h1>

                </h1>
                <p>

                </p>
            </section>
        </div>
    )
}

export default BuscarDrinks
