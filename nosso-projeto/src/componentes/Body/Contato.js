import React, { Component } from 'react'

export default class Contato extends Component {
    constructor (props) {
        super(props);
        console.log("construí");
        this.state = {
            dadosApi: []
        }
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then ((response)=> {
            if(response.ok){
                return response.json()
            }
        })
        .then((data) => {
            this.setState ( {dadosApi: data} )
            console.log(this.state);
        });
    }

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
