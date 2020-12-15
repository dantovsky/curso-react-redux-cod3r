import React, { Component } from 'react';

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

// Fazendo um destructoring já na assinatura do método, em vez de colocar props e depois estrair os valores
export default ({credit, debt}) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
                <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Déditos" />
                <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor Consolidado" />
            </Row>
        </fieldset>
    </Grid>

)