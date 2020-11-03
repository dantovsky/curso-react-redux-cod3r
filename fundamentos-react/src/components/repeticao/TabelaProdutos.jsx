import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default () => {
    // Usando rendericazao condicional na cor da tabela e no preco
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>€ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <table className="TabelaProdutos" style={{ width: '100%' }} border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {getLinhas()}
            </tbody>
        </table>
    )
}