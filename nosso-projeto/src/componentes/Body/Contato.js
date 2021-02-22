import React, { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (
            <div className="divForm">
                <form className="form">
                    <label>Nome:</label>
                    <input></input>
                    <label>E-mail:</label>
                    <input></input>
                    <label>Mensagem:</label>
                    <textarea></textarea>
                </form>
            </div>
        )
    }
}
