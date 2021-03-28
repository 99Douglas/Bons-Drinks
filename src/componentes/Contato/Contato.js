import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import {useState} from 'react'
import './contato.css'

const Contato = () => {

    const [inputUsuario, setInputUsuario] = useState("")
    
    const digitar = (valor) => {
        console.log(valor.target.value);
        setInputUsuario(valor.target.value)
    }

    const limpar = (event) => {
        event.preventDefault();
    }    


    return (
        <div className="divContato">
            <h1 className="formTitle">Contato</h1>
            <img className="formImg" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
            <form className="forms">
                <div>
                    <Input htmlFor="name" noChange={digitar} tipo="text" name="name">Nome:</Input>
                </div>
                <div>
                    <Input htmlFor="email" noChange={digitar} tipo="text" name="email">Email:</Input>
                </div>
                <div>
                    <label htmlFor="message" className="labelInput">Mensagem:</label>
                    <textarea className="textArea" onChange={digitar} name="message" />
                </div>
                <div>
                    <Button estilo="botao" noClick={limpar} titulo="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Contato
