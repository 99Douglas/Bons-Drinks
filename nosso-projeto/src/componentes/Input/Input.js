import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.children}</label>
                <input type={this.props.type} name={this.props.name} htmlFor={this.props.htmlFor}></input>
            </div>
        )
    }
}

