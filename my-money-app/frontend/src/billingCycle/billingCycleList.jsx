import React, { Component } from "react";
import { bindActionCreators } from 'redux'; // Faz a lingação com os Action Creators
import { connect } from 'react-redux';
import { getList } from './billingCycleActions' // Action

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    }

    render() {
        console.log(this.props.list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

// Recebe o estado e retorna um obj => Esse obj é o mapeamento entre o que
// queremos colocar dentro das props deste componente e onde é que, no estado,
// esse dado vai estar presente para que possa atribuir nas props
const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList); // Método decorator (que irá ler os dois métodos de mapeamento)