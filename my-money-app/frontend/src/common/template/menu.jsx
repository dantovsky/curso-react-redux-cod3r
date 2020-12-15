import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        {/* Na aula 195 o prof fez uma mudança mas deu erro na minha app */}
        <MenuItem path="/" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="billingCycles" label="Ciclos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
)