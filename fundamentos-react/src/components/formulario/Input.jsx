import './Input.css'
import React, { userState, useState } from 'react'
// Formulários :: https://pt-br.reactjs.org/docs/forms.html

// Fluxo unidirecional muito important no React:
// Somente quando o estado muda é que o componente muda (visual do componente) 

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        console.log(e.target.value)
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h3>Controlled component</h3>
                <input value={valor} onChange={quandoMudar} />

                <h3>Controlled component (read only)</h3>
                <input value={valor} readOnly disabled />

                <h3>Uncontrolled component</h3>
                <input value={undefined} />
            </div>
        </div>
    )
}