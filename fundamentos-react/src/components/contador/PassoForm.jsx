import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
            {/* o sinal de + no início converte o valor de string -> int */}
        </div>
    )
}