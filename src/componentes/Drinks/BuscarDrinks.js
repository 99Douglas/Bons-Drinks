import React from 'react'
import Input from '../Input/Input'
import {BuscaDeDrinks} from '../../Models/BuscaDeDrinks'
import {useState} from 'react'
import './buscardrinks.css'

const BuscarDrinks = () => {
    const [inputUser, setInputUser] = useState("")
    const [dadosApi, setDadosApi] = useState("")
 
    async function digitar (valor) {
        setInputUser(valor.target.value)
    }

    async function busca (){
        const req = await BuscaDeDrinks(inputUser);
        console.log(req.drinks[0]);
        setDadosApi(req.drinks[0])
    }

    return (
        <div className="divConteudoBusca">
            <section className="divBusca">
                <Input htmlFor="request" type="text" name="request" noChange={digitar}>Insira o drink!</Input>
                <button onClick={busca} className="btn">Envie!</button>
            </section>
            <section className="divConteudoCard">
            <img className="imgBusca" src={dadosApi.strDrinkThumb}></img>
                <h1 className="titleBusca">
                    {dadosApi.strDrink}
                </h1>
                <p className="txtBusca">
                    {dadosApi.strGlass}
                </p>
            </section>
        </div>
    )
}

export default BuscarDrinks
