import React from 'react'

export default props => {
    const callBack = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50 // 20 é o range e 50 é o valor mínimo
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => callBack('João', gerarIdade(), gerarNerd)}>Fornecer Informações</button>
        </div>
    )
}

// O símbolo underline (_) na arow function do botão significa que não me interesso em receber o event

/* Versão do botão com function()
<button onClick={
    function (e) {
        props.quandoClicar('João', 53, true)
    }
}>Fornecer Informações</button>
*/