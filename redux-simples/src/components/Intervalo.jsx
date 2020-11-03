import './Intervalo.css'
import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

function Intervalo(props) {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
                {/* Usa-se +e para garantir que será valor numérico, ou seja, converte de string para Number. */}
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

// Mapear os Actions Creators para dentro das propriedades do componente
function mapDispatchToProps(dispatch) {
    return {
        // funcao que será colocada dentro das props do componente
        alterarMinimo(novoNumero) {
            // action creator -> retorna uma action
            const action = alterarNumeroMinimo(novoNumero)

            // chamar o dispath passando a action
            // e essa action será passada para todos os reducers
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)