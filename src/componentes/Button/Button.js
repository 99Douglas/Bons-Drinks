import React from 'react'

const Button = ({estilo, noClick, titulo}) => {

    return (
        <div>
            <button className={estilo} onClick={noClick}>
                {titulo}
            </button>
        </div>
    )
}

export default Button
