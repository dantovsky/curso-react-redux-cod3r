import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import If from '../operador/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target // returns bool
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li className={selected ? 'active': ''}>
                    {/* Estrutura pra renderização de uma única aba */}
                    <a href='javascript:;'
                        data-toggle="tab"
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        );
    }
}

// Para esse componente ter acesso ao estado, precisa fazer o método mapStateToProps
const mapStateToProps = state => ({ tab: state.tab})

// Fazer o mapeamento dos Action Creators, para que possam ser dispsrados e estejam disponíveis a partir das propriedades desse componente
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
