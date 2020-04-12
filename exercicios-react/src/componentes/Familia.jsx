import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>

        {/* --- aula 22 --- */}
        
        {/* Iterar sob todos os compnentes filhos e cloná-los (utilizando a funcao map() que está em util/utils.js) */}
        {filhosComProps(props)}

        {/* --- aula 21 --- */}

        {/* Iterar sob todos os compnentes filhos e cloná-los */}
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, { ...props })
        })} */}

        {/* --------------- */}

        {/* Passa todas as propriedades de uma vez por um clone, utilizando o operador spread { ...props } */}
        {/* {React.cloneElement(props.children, { ...props })} */}

        {/* Passa todas as propriedades de uma vez pera referencia "props"
        {React.cloneElement(props.children, props)} */}
            
        {/* Propagando "props" para componentes filhos (maneira 1) */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome })} */}

        {/* {props.children} Aqui estarao todos os componentes filhos do componente Familia */}
    </div>