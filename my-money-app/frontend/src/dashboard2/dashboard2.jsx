import React, { Component } from "react";
import axios from 'axios'

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

const BASE_URL = 'http://localhost:3004/api'

/**
 * Este é um exemplo do Dashboard feito sem a utilização do Redux.
 */

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        const request = axios.get(`${BASE_URL}/billinCycles/summary`) // Chamada assíncrona
            .then(resp => this.setState(resp.data))
    }

    render() {
        // Destructoring para extratir as duas variáveis "credit" e "debt"
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title="Dashboard (Versão 2 - Sem Redux)" small="Versão 2.0" />
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