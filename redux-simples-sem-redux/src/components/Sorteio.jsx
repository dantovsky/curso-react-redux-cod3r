import React from 'react'
import Card from './Card'

export default props => {

    const { min, max } = props // Destructuring to get vars from props
    const aleatorio = parseInt(Math.random() * (max - min)) + min // sortear um num entre min e max

    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}