import React, { Component } from "react";

// Imports for integrate this component with Redux management state
import { connect } from 'react-redux'; // (step 1) <---
import { bindActionCreators } from 'redux'; // (step 5) <--- Ligar este componente com a Action Creators

import { getSummary } from './dashboardActions' // (step 6) <--- Action Creator implementada
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary() // Método que dispara o ínicio de um ciclo de vida do Redux
    }

    render() {
        // Destructoring para extratir as duas variáveis "credit" e "debt"
        const { credit, debt } = this.props.summary // (step 4) <---
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`${debt}`} text="Total de Déditos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`${credit - debt}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

// Especifica que dado do estado vai ser adicionado as propriedades do component Dashboard 
// Atribui "state.dashboard.summary" dos reducers à props.summary
const mapStateToProps = state => ({summary: state.dashboard.summary}) // (step 2) <---
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch) // (step 7) <--- Faz a ligacao entre todas as Actions Creators criadas, liga com o dispatch (quem dispara a ação). Sempre que chamar o getSummary(), automaticamente vai fazer um dispatch para todos os reducers da app, se o reducer estiver interessado em evoluir o estado baseado nessa ação, então irá mudar o estado e todos os componentes relacionados a esse estado serão renderizados novamente 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) // (step 3, 8) <--- // Padrão Decorator :: ensina para o React-Redux como faz para mapear, e no final retorna o componente já integrado com o mapeamento que foi feito <---
//  Ou seja, dentro do Dashboard que vai ser retornado vai ter uma prop chamada summary que vai refletir o summary que está dentro do estado global da app, em state.dashboard.summary