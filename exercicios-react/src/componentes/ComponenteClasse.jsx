import React, { Component } from 'react'

export default class ComponenteClasse extends Component {
    render() {
        return (
        <h1>{this.props.valor || 'Valor pardão'}</h1>
        )
    }
}

// Outra opção seria referenciar com React.Component:
/*
import React from from 'react'
export default class ComponenteClasse extends React.Component {}
*/