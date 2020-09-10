import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props // Destructuring to get vars from props
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