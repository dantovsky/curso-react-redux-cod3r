import React from 'react' // precisa deste import pora usar o JSX
import Membro from './Membro' // Membro.jsx será uma dependencia do componente FamiliaSilva.jsx

export default props =>
<div>
    {/* Criacao de 4 instancias do componente Membro */}
    <Membro nome="Rafael" sobrenome="Silva"/>
    <Membro nome="Daniela" sobrenome="Silva"/>
    <Membro nome="Pedro" sobrenome="Silva"/>
    <Membro nome="Ana" sobrenome="Silva"/>

    <h2>Família com sobrenome passado como parametro</h2>
    <p>Forma poderosa e simples de passar patametros de um componente pai para um componente filho</p>
    <Membro nome="Ana" sobrenome={props.sobrenome}/>
    <Membro nome="Diana" sobrenome={props.sobrenome}/>
    <Membro nome="Adriana" sobrenome={props.sobrenome}/>

</div>