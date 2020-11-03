import React from 'react'

// Soluções para retornar múltiplos elementos adjacentes (um ao lado do outro)

// Solução 03. Retornar um array de elementos
export default props => [
    <h1>Parte 1</h1>,
    <h1>Parte 2</h1>
]

// // Solução 02. No HTML gerado não heverá nenhuma tag a envolver os elementos "Parte 1" e "Parte 2" 
// export default props =>
//     <React.Fragment>
//         <h1>Paarte 1</h1>
//         <h1>Paarte 2</h1>
//     </React.Fragment>

// // Solução 01. Mais usada!
// export default props =>
//     <div>
//         <h1>Paarte 1</h1>
//         <h1>Paarte 2</h1>
//     </div>