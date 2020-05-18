import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            <span>O número {props.numero} é </span>
            {isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}