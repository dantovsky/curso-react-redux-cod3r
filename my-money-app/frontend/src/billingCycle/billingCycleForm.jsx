import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form' // "reduxForm" funciona como a funcao "connect", do Redux (liga o componente ao Redux). Field: tag utilizada para controlar os campos do formulário.

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    // Usando Map Reduce
    calculateSummary() {

        console.log('this.props.credits: ', this.props.credits)
        // t: acumulardor, v: valor atual
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.length > 0 ? this.props.credits.map(c => +c.value || 0).reduce(sum) : [],
            sumOfDebts: this.props.debts.length > 0 ? this.props.debts.map(d => +d.value || 0).reduce(sum) : []
        }
    }
    
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Mês" cols="12 4" placeholder="Informe o mês"/>
                    <Field name="year" component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Ano" cols="12 4" placeholder="Informe o ano"/>
                        <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols="12 6" list={credits} readOnly={readOnly}
                        field="credits" legend="Créditos" />
                    <ItemList cols="12 6" list={debts} readOnly={readOnly}
                        field="debts" legend="Débitos" showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }
}

// O Redux Form disponibiliza uma flag que evita que o form seja destruído, útil para o reuso de formulário
// (útil quando clicar em update, em que o form seria destruído para ser criado novamente)
// export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm); // versão de quando tinha somente o Redux Form (sem o Redux)

// Após decorar o componente com o Redux Form, decoramos com o Redux
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
const selector = formValueSelector('billingCycleForm') // Queremos obter a lista de credits que está sendo controlado pelo Redux Form
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)


