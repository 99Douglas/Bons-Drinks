import React from 'react'
import {useState} from 'react'
import {RandomDrink} from '../../Models/RandomDrink';
import Button from '../Button/Button';
import './estoucomsorte.css';


const EstouComSorte = () => {
    const [dadosApi, setDadosApi] = useState("");

    async function busca (){
        const req = await RandomDrink();
        console.log(req.drinks[0]);
        setDadosApi(req.drinks[0])
    }

    return (
        <div className="divSorte">
            <div className="divBtn">
                <button onClick={busca} className="btn">Conte com sua sorte!</button>
            </div>
            <div className="divCard">
                <img className="imgSorte" src={dadosApi.strDrinkThumb}></img>
                <h1 className="titleSorte">
                    {dadosApi.strDrink}
                </h1>
                <p className="txtSorte">
                    {dadosApi.strGlass}
                </p>
            </div>
        </div>
    )
}

export default EstouComSorte
