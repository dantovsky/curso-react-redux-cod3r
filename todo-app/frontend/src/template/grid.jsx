import React, { Component } from 'react'

export default class Grid extends Component {

    // Passa 4 números e o método converto para o
    // padrão de 12 colunas do Bootstrap (cel, disp menores, médios, e telas maiores)
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-xs-${cols[1]}`
        if(cols[2]) classes += ` col-xs-${cols[2]}`
        if(cols[3]) classes += ` col-xs-${cols[3]}`

        return classes
    }

    render(){
        const gridClases = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClases}>
                {this.props.children}
            </div>
        )
    }
}