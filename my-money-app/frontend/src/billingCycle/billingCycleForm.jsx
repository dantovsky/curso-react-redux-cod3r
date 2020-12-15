import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form' // "reduxForm" funciona como a funcao "connect", do Redux (liga o componente ao Redux). Field: tag utilizada para controlar os campos do formulário.

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome" />
                    <Field name="month" component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Mês" cols="12 4" placeholder="Informe o mês"/>
                    <Field name="year" component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Ano" cols="12 4" placeholder="Informe o ano"/>
                    <CreditList cols="12 6" list={credits} readOnly={readOnly} />
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
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)


