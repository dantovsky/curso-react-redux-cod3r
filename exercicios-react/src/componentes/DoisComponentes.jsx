import React from 'react' // preciso deste import para interpretar qualquer trecho de JSX

const CompA = props =>
<h1>Primeiro diz: {props.valor}</h1>

const CompB = props =>
<h1>Segundo diz: {props.valor}</h1>

export { CompA, CompB }
export default CompA // exportanto também por padrão, o CompA