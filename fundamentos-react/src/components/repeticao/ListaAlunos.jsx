import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    // console.log(alunos)

    // Transformar um array de objetos alunos em um array de objetos JSX.
    const alunosListJSX = alunos.map(alunos => {
        return (
            <li key={alunos.id}>
                {alunos.id}. {alunos.nome} -> {alunos.nota}
            </li>
        )
    });

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosListJSX}
            </ul>
        </div>
    );
}