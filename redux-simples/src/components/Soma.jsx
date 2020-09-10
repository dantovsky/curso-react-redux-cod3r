import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max + min}</strong>
                </span>
            </div>
        </Card>
    )
}

// Mapeia dados do estado para as propriedades do componente
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)