import React from 'react'

export default function ComParametro(props) {
    // console.log('Lista de parametros: ',  props)
    // const sub = props.subtitulo
    const status = props.nota >= 7 ? 'Aprovado' : 'Em recuperação'
    // props.nota = Math.ceil(props.nota) // isto resultara em erro, pois os props são "read only"
    // => TypeError: Cannot assign to read only property 'nota' of object '#<Object>'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno}</strong> tem nota <strong>{props.nota} e está {status}</strong></p>
        </div>
    )
}